// ===== AIRWAY CLINIC — MYOFUNCTIONAL THERAPY APP =====
// Pure vanilla JS, no dependencies, data.js provides exercise content

(function () {
  'use strict';

  // =============================================
  // CONSTANTS
  // =============================================
  var STORAGE_KEY = 'airway-therapy-data';
  var TOTAL_WEEKS = 10;
  var TIMER_CIRCUMFERENCE = 326; // 2 * PI * ~52 (radius of 120px timer ring ≈ 52)

  // =============================================
  // I18N — All user-facing strings
  // =============================================
  var strings = {
    nav_home:        { se: 'Hem',               en: 'Home' },
    nav_training:    { se: 'Träning',           en: 'Training' },
    nav_notes:       { se: 'Anteckningar',      en: 'Notes' },
    nav_progress:    { se: 'Framsteg',          en: 'Progress' },
    nav_settings:    { se: 'Inställningar',     en: 'Settings' },
    hero_title:      { se: 'Myofunktionell Terapi',  en: 'Myofunctional Therapy' },
    hero_sub:        { se: 'Ditt personliga träningsprogram', en: 'Your personalised training programme' },
    stat_week:       { se: 'Aktuell vecka',     en: 'Current week' },
    stat_streak:     { se: 'Dagars sträcka',    en: 'Day streak' },
    stat_progress:   { se: 'Totalt avklarat',   en: 'Overall progress' },
    cta_label:       { se: 'Starta dagens träning', en: "Start Today's Training" },
    week_heading:    { se: 'Programöversikt',   en: 'Programme Overview' },
    week_locked:     { se: 'Låst',              en: 'Locked' },
    week_completed:  { se: 'Avslutad',         en: 'Completed' },
    week_current:    { se: 'Pågående',         en: 'Current' },
    week_upcoming:   { se: 'Kommande',         en: 'Upcoming' },
    week_exercises:  { se: 'övningar',          en: 'exercises' },
    back:            { se: 'Tillbaka',          en: 'Back' },
    instructions:    { se: 'Instruktioner',     en: 'Instructions' },
    start:           { se: 'Start',             en: 'Start' },
    stop:            { se: 'Stoppa',             en: 'Stop' },
    reset:           { se: 'Återställ',          en: 'Reset' },
    complete:        { se: 'Klar',              en: 'Done' },
    note:            { se: 'Anteckna',          en: 'Note' },
    complete_session:{ se: 'Avsluta passet',     en: 'Complete Session' },
    note_title:      { se: 'Anteckning',         en: 'Note' },
    note_placeholder:{ se: 'Skriv en anteckning...', en: 'Write a note...' },
    mood_label:      { se: 'Humör',             en: 'Mood' },
    effort_label:    { se: 'Ansträngning',      en: 'Effort' },
    save:            { se: 'Spara',              en: 'Save' },
    cancel:          { se: 'Avbryt',             en: 'Cancel' },
    notes_title:     { se: 'Anteckningar',      en: 'Notes' },
    notes_empty_title:{ se: 'Inga anteckningar än', en: 'No notes yet' },
    notes_empty_text:{ se: 'Dina anteckningar från träningspassen kommer att visas här.', en: 'Your notes from training sessions will appear here.' },
    notes_filter_all:{ se: 'Alla',              en: 'All' },
    progress_title:  { se: 'Framsteg',          en: 'Progress' },
    progress_sub:    { se: 'Din utveckling över tid', en: 'Your development over time' },
    progress_overall:{ se: 'Totalt framsteg',    en: 'Overall progress' },
    progress_weekly:{ se: 'Vecka för vecka',    en: 'Week by week' },
    progress_streak_cal:{ se: 'Aktivitetskalender (30 dagar)', en: 'Activity calendar (30 days)' },
    stat_sessions:   { se: 'Totalt pass',       en: 'Total sessions' },
    stat_exercises:   { se: 'Avkl. övningar',    en: 'Exercises done' },
    stat_longest:    { se: 'Längsta sträcka',    en: 'Longest streak' },
    settings_title:  { se: 'Inställningar',     en: 'Settings' },
    settings_sub:    { se: 'Anpassa din upplevelse', en: 'Customise your experience' },
    settings_lang:   { se: 'Språk',              en: 'Language' },
    settings_data:   { se: 'Data',               en: 'Data' },
    reset_data:      { se: 'Återställ all data', en: 'Reset all data' },
    reset_desc:      { se: 'Radera all träningsdata och börja om', en: 'Delete all training data and start over' },
    reset_confirm:   { se: 'Är du säker? All din träningsdata kommer att raderas permanent.', en: 'Are you sure? All your training data will be permanently deleted.' },
    settings_about:   { se: 'Om',                en: 'About' },
    about_desc:       { se: 'Myofunktionell terapi-app för sömnapnébehandling', en: 'Myofunctional therapy app for sleep apnea treatment' },
    cal_mon: { se: 'Må', en: 'Mo' }, cal_tue: { se: 'Ti', en: 'Tu' }, cal_wed: { se: 'On', en: 'We' },
    cal_thu: { se: 'To', en: 'Th' }, cal_fri: { se: 'Fr', en: 'Fr' }, cal_sat: { se: 'Lö', en: 'Sa' }, cal_sun: { se: 'Sö', en: 'Su' },
  };

  // =============================================
  // STATE
  // =============================================
  var state = {
    lang: 'en',
    currentView: 'home',
    selectedWeek: 1,
    completedExercises: {},   // "weekId-exIdx": { completedAt, reps, note, mood, effort }
    weekUnlocked: [1,2,3,4,5,6,7,8,9,10], // REVIEW MODE — all unlocked for preview
    dailyStreak: 0,
    longestStreak: 0,
    lastActiveDate: null,
    sessionNotes: [],         // [{ date, weekId, exerciseId, exerciseName, note, mood, effort, createdAt }]
    activeDays: [],           // array of date strings "YYYY-MM-DD" for streak calendar
    timers: {},               // exerciseId: { interval, remaining, total }
    repCounters: {},          // exerciseId: currentCount
  };

  // =============================================
  // DOM HELPERS
  // =============================================
  var $ = function (sel) { return document.querySelector(sel); };
  var $$ = function (sel) { return document.querySelectorAll(sel); };

  function t(key) {
    return state.lang === 'se' ? (strings[key] && strings[key].se) || key : (strings[key] && strings[key].en) || key;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // =============================================
  // PERSISTENCE
  // =============================================
  function save() {
    var toSave = {
      lang: state.lang,
      completedExercises: state.completedExercises,
      weekUnlocked: state.weekUnlocked,
      dailyStreak: state.dailyStreak,
      longestStreak: state.longestStreak,
      lastActiveDate: state.lastActiveDate,
      sessionNotes: state.sessionNotes,
      activeDays: state.activeDays,
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    } catch (e) {
      // Storage full — silently ignore
    }
  }

  function load() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        if (parsed.lang) state.lang = parsed.lang;
        if (parsed.completedExercises) state.completedExercises = parsed.completedExercises;
        if (parsed.weekUnlocked) state.weekUnlocked = parsed.weekUnlocked;
        if (typeof parsed.dailyStreak === 'number') state.dailyStreak = parsed.dailyStreak;
        if (typeof parsed.longestStreak === 'number') state.longestStreak = parsed.longestStreak;
        if (parsed.lastActiveDate) state.lastActiveDate = parsed.lastActiveDate;
        if (parsed.sessionNotes) state.sessionNotes = parsed.sessionNotes;
        if (parsed.activeDays) state.activeDays = parsed.activeDays;
      }
    } catch (e) {
      // Corrupted data — start fresh
    }
  }

  // =============================================
  // DATA ACCESS — delegates to data.js
  // =============================================
  function getWeeks() {
    return (window.THERAPY_DATA && window.THERAPY_DATA.weeks) || [];
  }

  function getWeek(weekId) {
    var weeks = getWeeks();
    for (var i = 0; i < weeks.length; i++) {
      if (weeks[i].id === weekId) return weeks[i];
    }
    return null;
  }

  function getExercisesForWeek(weekId) {
    var week = getWeek(weekId);
    return (week && week.exercises) || [];
  }

  function getExercise(weekId, exIdx) {
    var exercises = getExercisesForWeek(weekId);
    return exercises[exIdx] || null;
  }

  // =============================================
  // STREAK LOGIC
  // =============================================
  function todayStr() {
    var d = new Date();
    var y = d.getFullYear();
    var m = String(d.getMonth() + 1).padStart(2, '0');
    var day = String(d.getDate()).padStart(2, '0');
    return y + '-' + m + '-' + day;
  }

  function updateStreak() {
    var today = todayStr();

    // Add today to active days if not already present
    var idx = state.activeDays.indexOf(today);
    if (idx === -1) {
      state.activeDays.push(today);
    }

    state.lastActiveDate = today;

    // Calculate streak from activeDays
    state.activeDays.sort();
    var streak = 0;
    var checkDate = new Date();
    checkDate.setHours(0, 0, 0, 0);

    for (var i = 0; i < 365; i++) {
      var y = checkDate.getFullYear();
      var m = String(checkDate.getMonth() + 1).padStart(2, '0');
      var d = String(checkDate.getDate()).padStart(2, '0');
      var dateStr = y + '-' + m + '-' + d;

      if (state.activeDays.indexOf(dateStr) !== -1) {
        streak++;
      } else if (i === 0) {
        // Today not yet recorded, skip
      } else {
        break;
      }
      checkDate.setDate(checkDate.getDate() - 1);
    }

    state.dailyStreak = streak;
    if (streak > state.longestStreak) {
      state.longestStreak = streak;
    }
  }

  // =============================================
  // WEEK UNLOCK LOGIC
  // =============================================
  function checkWeekUnlock() {
    var weeks = getWeeks();
    for (var i = 0; i < weeks.length; i++) {
      var w = weeks[i];
      var wIdx = w.id;
      if (state.weekUnlocked.indexOf(wIdx) !== -1) {
        // Check if all exercises in this week are completed
        var exercises = getExercisesForWeek(wIdx);
        var allDone = true;
        for (var j = 0; j < exercises.length; j++) {
          var key = wIdx + '-' + j;
          if (!state.completedExercises[key]) {
            allDone = false;
            break;
          }
        }
        // Unlock next week if all done and next exists
        if (allDone && i + 1 < weeks.length) {
          var nextId = weeks[i + 1].id;
          if (state.weekUnlocked.indexOf(nextId) === -1) {
            state.weekUnlocked.push(nextId);
          }
        }
      }
    }
  }

  // =============================================
  // PROGRESS CALCULATIONS
  // =============================================
  function getTotalExercises() {
    var weeks = getWeeks();
    var total = 0;
    for (var i = 0; i < weeks.length; i++) {
      total += (weeks[i].exercises || []).length;
    }
    return total;
  }

  function getCompletedCount() {
    return Object.keys(state.completedExercises).length;
  }

  function getOverallPercent() {
    var total = getTotalExercises();
    if (total === 0) return 0;
    return Math.round((getCompletedCount() / total) * 100);
  }

  function getWeekPercent(weekId) {
    var exercises = getExercisesForWeek(weekId);
    if (!exercises.length) return 0;
    var done = 0;
    for (var i = 0; i < exercises.length; i++) {
      if (state.completedExercises[weekId + '-' + i]) done++;
    }
    return Math.round((done / exercises.length) * 100);
  }

  function getCurrentWeekId() {
    // Find highest unlocked week that is not fully completed
    var weeks = getWeeks();
    for (var i = weeks.length - 1; i >= 0; i--) {
      if (state.weekUnlocked.indexOf(weeks[i].id) !== -1) {
        return weeks[i].id;
      }
    }
    return weeks.length > 0 ? weeks[0].id : 1;
  }

  function getTotalSessions() {
    return state.sessionNotes.length;
  }

  // =============================================
  // TIMER LOGIC
  // =============================================
  function startTimer(exerciseId, seconds) {
    stopTimer(exerciseId);
    if (!state.timers[exerciseId]) {
      state.timers[exerciseId] = {};
    }
    state.timers[exerciseId].total = seconds;
    state.timers[exerciseId].remaining = seconds;

    state.timers[exerciseId].interval = setInterval(function () {
      state.timers[exerciseId].remaining--;
      updateTimerDisplay(exerciseId);
      if (state.timers[exerciseId].remaining <= 0) {
        stopTimer(exerciseId);
        // Vibrate on complete
        if (navigator.vibrate) navigator.vibrate(200);
        playCompleteSound(exerciseId);
      }
    }, 1000);
  }

  function stopTimer(exerciseId) {
    if (state.timers[exerciseId] && state.timers[exerciseId].interval) {
      clearInterval(state.timers[exerciseId].interval);
      state.timers[exerciseId].interval = null;
    }
  }

  function resetTimer(exerciseId) {
    stopTimer(exerciseId);
    if (state.timers[exerciseId]) {
      state.timers[exerciseId].remaining = state.timers[exerciseId].total || 0;
    }
    updateTimerDisplay(exerciseId);
  }

  function updateTimerDisplay(exerciseId) {
    var timerText = document.getElementById('timer-text-' + exerciseId);
    var timerFill = document.getElementById('timer-fill-' + exerciseId);
    if (!timerText) return;

    var data = state.timers[exerciseId];
    if (!data) return;

    var remaining = Math.max(0, data.remaining || 0);
    var total = data.total || 1;
    var mins = Math.floor(remaining / 60);
    var secs = remaining % 60;
    timerText.textContent = String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0');

    if (timerFill) {
      var offset = TIMER_CIRCUMFERENCE - (TIMER_CIRCUMFERENCE * (remaining / total));
      timerFill.style.strokeDashoffset = offset;
    }
  }

  function playCompleteSound(exerciseId) {
    // Visual feedback — pulse the exercise card
    var card = document.getElementById('exercise-card-' + exerciseId);
    if (card) {
      card.classList.add('exercise-done');
      setTimeout(function () { card.classList.remove('exercise-done'); }, 2000);
    }
  }

  // =============================================
  // EXERCISE COMPLETION
  // =============================================
  function completeExercise(weekId, exIdx) {
    var key = weekId + '-' + exIdx;
    var exercise = getExercise(weekId, exIdx);

    state.completedExercises[key] = {
      completedAt: new Date().toISOString(),
      reps: state.repCounters[key] || 0,
    };

    updateStreak();
    checkWeekUnlock();
    save();
    updateHeaderProgress();

    // Update the complete button in UI
    var btn = document.getElementById('complete-btn-' + key);
    if (btn) {
      btn.classList.add('done');
      btn.textContent = t('complete') + ' ✓';
    }

    var card = document.getElementById('exercise-card-' + key);
    if (card) {
      card.classList.add('exercise-done');
    }
  }

  // =============================================
  // NOTE SAVING
  // =============================================
  function saveNote(weekId, exIdx, note, mood, effort) {
    var exercise = getExercise(weekId, exIdx);
    var entry = {
      date: new Date().toISOString(),
      weekId: weekId,
      exerciseId: exIdx,
      exerciseName: exercise ? (exercise.title || '') : '',
      note: note,
      mood: mood || '',
      effort: effort || 0,
      createdAt: Date.now(),
    };

    state.sessionNotes.unshift(entry);

    // Also update the completed exercise record with note data
    var key = weekId + '-' + exIdx;
    if (state.completedExercises[key]) {
      state.completedExercises[key].note = note;
      state.completedExercises[key].mood = mood;
      state.completedExercises[key].effort = effort;
    }

    save();
  }

  // =============================================
  // VIEW MANAGEMENT
  // =============================================
  function showView(name) {
    $$('.view').forEach(function (v) { v.classList.remove('active'); });
    var target = $('#' + name + 'View');
    if (target) target.classList.add('active');
    state.currentView = name;
    window.scrollTo(0, 0);
    updateBottomNav(name);

    // Re-render the target view
    switch (name) {
      case 'home': renderHome(); break;
      case 'training': renderTraining(state.selectedWeek); break;
      case 'notes': renderNotes(); break;
      case 'progress': renderProgress(); break;
      case 'settings': renderSettings(); break;
    }
  }

  function updateBottomNav(active) {
    var map = {
      home: 'navHome', training: 'navTraining',
      notes: 'navNotes', progress: 'navProgress', settings: 'navSettings',
    };
    var activeId = map[active] || 'navHome';
    $$('.bottom-nav-item').forEach(function (btn) {
      btn.classList.toggle('active', btn.id === activeId);
    });
  }

  function updateHeaderProgress() {
    var pct = getOverallPercent();
    var pillFill = $('#progressPillFill');
    var pillText = $('#progressText');
    if (pillFill) pillFill.style.width = pct + '%';
    if (pillText) pillText.textContent = pct + '%';
  }

  // =============================================
  // UPDATE ALL I18N ELEMENTS
  // =============================================
  function updateI18n() {
    // Update nav labels
    $$('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });

    // Update lang flag buttons
    $('#langSe').classList.toggle('active', state.lang === 'se');
    $('#langEn').classList.toggle('active', state.lang === 'en');
  }

  // =============================================
  // RENDER: HOME
  // =============================================
  function renderHome() {
    // Hero
    $('#heroTitle').textContent = t('hero_title');
    $('#heroSub').textContent = t('hero_sub');

    // Stats
    var currentWeekId = getCurrentWeekId();
    var statsHtml = '' +
      '<div class="stat-card">' +
        '<span class="stat-num">' + currentWeekId + '/' + TOTAL_WEEKS + '</span>' +
        '<span class="stat-label">' + t('stat_week') + '</span>' +
      '</div>' +
      '<div class="stat-card">' +
        '<span class="stat-num">' + state.dailyStreak + '</span>' +
        '<span class="stat-label">' + t('stat_streak') + '</span>' +
      '</div>' +
      '<div class="stat-card">' +
        '<span class="stat-num">' + getOverallPercent() + '%</span>' +
        '<span class="stat-label">' + t('stat_progress') + '</span>' +
      '</div>';
    $('#homeStats').innerHTML = statsHtml;

    // CTA
    $('#ctaLabel').textContent = t('cta_label');

    // Week heading
    $('#weekHeading').textContent = t('week_heading');

    // Week grid
    renderWeekGrid();
  }

  function renderWeekGrid() {
    var weeks = getWeeks();
    var grid = $('#weekGrid');
    if (!grid) return;
    grid.innerHTML = '';

    for (var i = 0; i < weeks.length; i++) {
      var w = weeks[i];
      var isUnlocked = state.weekUnlocked.indexOf(w.id) !== -1;
      var pct = getWeekPercent(w.id);
      var isCompleted = pct === 100;
      var isCurrent = isUnlocked && !isCompleted;
      var statusClass = isCompleted ? 'completed' : (isCurrent ? 'current' : (isUnlocked ? 'upcoming' : 'locked'));

      var card = document.createElement('div');
      card.className = 'week-card ' + statusClass;
      card.dataset.weekId = w.id;

      var statusBadge = '';
      var badgeLabel = '';
      if (isCompleted) badgeLabel = t('week_completed');
      else if (isCurrent) badgeLabel = t('week_current');
      else if (isUnlocked) badgeLabel = t('week_upcoming');
      else badgeLabel = t('week_locked');

      statusBadge = '<span class="week-status-badge ' + statusClass + '">' + badgeLabel + '</span>';

      var icon = isUnlocked ? (w.icon || '📋') : '🔒';
      var exerciseCount = (w.exercises || []).length;

      card.innerHTML =
        '<div class="week-icon">' + icon + '</div>' +
        '<div class="week-info">' +
          '<div class="week-title">' + escapeHtml(w.title || ('Week ' + w.id)) + '</div>' +
          '<div class="week-meta">' + exerciseCount + ' ' + t('week_exercises') + ' · ' + pct + '%</div>' +
        '</div>' +
        statusBadge;

      if (isUnlocked) {
        (function (weekId) {
          card.addEventListener('click', function () {
            state.selectedWeek = weekId;
            showView('training');
          });
        })(w.id);
      }

      grid.appendChild(card);
    }

    // If no data loaded, show message
    if (weeks.length === 0) {
      grid.innerHTML = '<div class="empty-state">' +
        '<div class="empty-state-icon">📋</div>' +
        '<div class="empty-state-title">No weeks loaded</div>' +
        '<div class="empty-state-text">Load data.js to see your programme.</div>' +
      '</div>';
    }
  }

  // =============================================
  // RENDER: TRAINING
  // =============================================
  function renderTraining(weekId) {
    var week = getWeek(weekId);
    var container = $('#trainingContainer');
    if (!container) return;

    if (!week) {
      container.innerHTML = '<div class="empty-state">' +
        '<div class="empty-state-icon">📋</div>' +
        '<div class="empty-state-title">Week not found</div>' +
        '<div class="empty-state-text">Select a week from the home screen.</div>' +
      '</div>';
      return;
    }

    $('#trainingBackLabel').textContent = t('back');

    var exercises = week.exercises || [];
    var pct = getWeekPercent(weekId);

    var html = '<div class="training-header">' +
      '<h1 class="training-week-title">' + escapeHtml(week.title || ('Week ' + weekId)) + '</h1>' +
      '<div class="training-week-desc">' + escapeHtml(week.description || '') + '</div>' +
    '</div>';

    // Exercise cards
    for (var i = 0; i < exercises.length; i++) {
      var ex = exercises[i];
      var key = weekId + '-' + i;
      var isDone = !!state.completedExercises[key];
      var isTimer = ex.type === 'timer' || ex.type === 'hold';
      var timerSec = (ex.seconds || 30);

      html += '<div class="exercise-card' + (isDone ? ' exercise-done' : '') + '" id="exercise-card-' + key + '">';

      // Header
      html += '<div class="exercise-header">' +
        '<div class="exercise-icon">' + (ex.icon || '💪') + '</div>' +
        '<div class="exercise-title">' + escapeHtml(ex.title || ('Exercise ' + (i + 1))) + '</div>' +
        '<span class="exercise-badge">' + (isTimer ? timerSec + 's' : (ex.reps || 10) + '×') + '</span>' +
      '</div>';

      // Instructions toggle
      var instrText = ex.instructions || '';
      if (instrText) {
        html += '<button class="exercise-instructions-toggle" id="instr-toggle-' + key + '">' +
          t('instructions') + ' <span class="toggle-arrow">▼</span>' +
        '</button>';
        html += '<div class="exercise-instructions" id="instr-' + key + '">' + escapeHtml(instrText) + '</div>';
      }

      // Controls
      if (isTimer) {
        // Timer display
        html += '<div class="exercise-controls">' +
          '<div class="timer-display">' +
            '<svg class="timer-ring" viewBox="0 0 120 120">' +
              '<circle class="timer-ring-bg" cx="60" cy="60" r="52" />' +
              '<circle class="timer-ring-fill" cx="60" cy="60" r="52" id="timer-fill-' + key + '" />' +
            '</svg>' +
            '<span class="timer-text" id="timer-text-' + key + '">' +
              String(Math.floor(timerSec / 60)).padStart(2, '0') + ':' + String(timerSec % 60).padStart(2, '0') +
            '</span>' +
          '</div>' +
        '</div>';

        // Timer buttons
        html += '<div class="exercise-actions">' +
          '<button class="exercise-btn start" id="timer-start-' + key + '">' + t('start') + ' ▶</button>' +
          '<button class="exercise-btn stop" id="timer-stop-' + key + '" style="display:none">' + t('stop') + ' ⏸</button>' +
          '<button class="exercise-btn reset" id="timer-reset-' + key + '">' + t('reset') + ' ↺</button>' +
          '<button class="exercise-btn note" id="note-btn-' + key + '" title="' + t('note') + '">📝</button>' +
        '</div>';
      } else {
        // Rep counter
        var currentReps = (state.repCounters[key] || 0);
        html += '<div class="exercise-controls">' +
          '<div class="rep-display">' +
            '<button class="rep-btn" id="rep-minus-' + key + '">−</button>' +
            '<span id="rep-count-' + key + '">' + currentReps + '</span>' +
            '<button class="rep-btn" id="rep-plus-' + key + '">+</button>' +
          '</div>' +
        '</div>';

        html += '<div class="exercise-actions">' +
          '<button class="exercise-btn complete' + (isDone ? ' done' : '') + '" id="complete-btn-' + key + '">' +
            (isDone ? t('complete') + ' ✓' : t('complete')) +
          '</button>' +
          '<button class="exercise-btn note" id="note-btn-' + key + '" title="' + t('note') + '">📝</button>' +
        '</div>';
      }

      html += '</div>'; // close exercise-card
    }

    // Complete session button
    html += '<button class="complete-session-btn" id="completeSessionBtn">' + t('complete_session') + '</button>';

    container.innerHTML = html;

    // Bind events
    bindTrainingEvents(weekId, exercises);
  }

  function bindTrainingEvents(weekId, exercises) {
    // Back button
    var backBtn = $('#trainingBackBtn');
    if (backBtn) {
      backBtn.onclick = function () { showView('home'); };
    }

    for (var i = 0; i < exercises.length; i++) {
      var ex = exercises[i];
      var key = weekId + '-' + i;
      var isTimer = ex.type === 'timer' || ex.type === 'hold';

      // Instructions toggle
      (function (k) {
        var toggle = $('#instr-toggle-' + k);
        var content = $('#instr-' + k);
        if (toggle && content) {
          toggle.addEventListener('click', function () {
            toggle.classList.toggle('open');
            content.classList.toggle('open');
          });
        }
      })(key);

      if (isTimer) {
        (function (k, sec) {
          var startBtn = $('#timer-start-' + k);
          var stopBtn = $('#timer-stop-' + k);
          var resetBtn = $('#timer-reset-' + k);

          if (startBtn) startBtn.addEventListener('click', function () {
            startTimer(k, sec);
            startBtn.style.display = 'none';
            if (stopBtn) stopBtn.style.display = '';
          });

          if (stopBtn) stopBtn.addEventListener('click', function () {
            stopTimer(k);
            startBtn.style.display = '';
            stopBtn.style.display = 'none';
          });

          if (resetBtn) resetBtn.addEventListener('click', function () {
            resetTimer(k);
            startBtn.style.display = '';
            if (stopBtn) stopBtn.style.display = 'none';
          });
        })(key, ex.seconds || 30);
      } else {
        (function (k) {
          var minusBtn = $('#rep-minus-' + k);
          var plusBtn = $('#rep-plus-' + k);
          var countEl = $('#rep-count-' + k);

          if (!state.repCounters[k]) state.repCounters[k] = 0;

          if (minusBtn) minusBtn.addEventListener('click', function () {
            state.repCounters[k] = Math.max(0, (state.repCounters[k] || 0) - 1);
            if (countEl) countEl.textContent = state.repCounters[k];
          });

          if (plusBtn) plusBtn.addEventListener('click', function () {
            state.repCounters[k] = (state.repCounters[k] || 0) + 1;
            if (countEl) countEl.textContent = state.repCounters[k];
          });

          // Complete button
          var completeBtn = $('#complete-btn-' + k);
          if (completeBtn) {
            completeBtn.addEventListener('click', function () {
              completeExercise(weekId, i);
            });
          }
        })(key);
      }

      // Note button
      (function (k, exIdx) {
        var noteBtn = $('#note-btn-' + k);
        if (noteBtn) {
          noteBtn.addEventListener('click', function () {
            openNoteModal(weekId, exIdx);
          });
        }
      })(key, i);
    }

    // Complete session
    var sessionBtn = $('#completeSessionBtn');
    if (sessionBtn) {
      sessionBtn.addEventListener('click', function () {
        updateStreak();
        checkWeekUnlock();
        save();
        updateHeaderProgress();
        showView('home');
      });
    }
  }

  // =============================================
  // NOTE MODAL
  // =============================================
  var noteModalState = { weekId: null, exIdx: null };

  function openNoteModal(weekId, exIdx) {
    noteModalState.weekId = weekId;
    noteModalState.exIdx = exIdx;

    $('#noteModalTitle').textContent = t('note_title');
    $('#noteText').placeholder = t('note_placeholder');
    $('#moodLabel').textContent = t('mood_label');
    $('#effortLabel').textContent = t('effort_label');
    $('#noteSaveBtn').textContent = t('save');

    // Reset form
    $('#noteText').value = '';
    $$('.mood-btn').forEach(function (btn) { btn.classList.remove('selected'); });
    $$('.effort-btn').forEach(function (btn) { btn.classList.remove('selected'); });

    // Pre-fill if note already exists
    var key = weekId + '-' + exIdx;
    var existing = state.completedExercises[key];
    if (existing) {
      if (existing.note) $('#noteText').value = existing.note;
      if (existing.mood) {
        $$('.mood-btn').forEach(function (btn) {
          if (btn.dataset.mood === existing.mood) btn.classList.add('selected');
        });
      }
      if (existing.effort) {
        $$('.effort-btn').forEach(function (btn) {
          if (parseInt(btn.dataset.effort) === existing.effort) btn.classList.add('selected');
        });
      }
    }

    $('#noteModal').classList.add('open');
  }

  function closeNoteModal() {
    $('#noteModal').classList.remove('open');
  }

  function handleNoteSave() {
    var text = $('#noteText').value.trim();
    var moodBtn = document.querySelector('.mood-btn.selected');
    var effortBtn = document.querySelector('.effort-btn.selected');

    var mood = moodBtn ? moodBtn.dataset.mood : '';
    var effort = effortBtn ? parseInt(effortBtn.dataset.effort) : 0;

    saveNote(noteModalState.weekId, noteModalState.exIdx, text, mood, effort);
    closeNoteModal();
  }

  // =============================================
  // CONFIRM MODAL
  // =============================================
  var confirmCallback = null;

  function showConfirm(message, onConfirm) {
    $('#confirmText').textContent = message;
    $('#confirmCancel').textContent = t('cancel');
    confirmCallback = onConfirm;
    $('#confirmModal').classList.add('open');
  }

  function closeConfirm() {
    $('#confirmModal').classList.remove('open');
    confirmCallback = null;
  }

  // =============================================
  // RENDER: NOTES
  // =============================================
  function renderNotes() {
    var container = $('#notesContainer');
    if (!container) return;

    var headerHtml = '<div class="notes-header">' +
      '<h2>' + t('notes_title') + '</h2>' +
    '</div>';

    // Filter buttons
    var weeks = getWeeks();
    var filterHtml = '<div class="notes-filter">' +
      '<button class="notes-filter-btn active" data-filter="all">' + t('notes_filter_all') + '</button>';
    for (var w = 0; w < weeks.length; w++) {
      filterHtml += '<button class="notes-filter-btn" data-filter="' + weeks[w].id + '">' +
        escapeHtml(weeks[w].title || ('Week ' + weeks[w].id)) +
      '</button>';
    }
    filterHtml += '</div>';

    container.innerHTML = headerHtml + filterHtml + '<div id="notesList"></div>';

    renderNotesList('all');

    // Bind filter buttons
    $$('.notes-filter-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        $$('.notes-filter-btn').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        renderNotesList(btn.dataset.filter);
      });
    });
  }

  function renderNotesList(filter) {
    var listEl = $('#notesList');
    if (!listEl) return;

    var notes = state.sessionNotes;
    if (filter !== 'all') {
      notes = notes.filter(function (n) { return String(n.weekId) === String(filter); });
    }

    if (!notes.length) {
      listEl.innerHTML = '<div class="notes-empty">' +
        '<div class="notes-empty-icon">📝</div>' +
        '<div class="notes-empty-title">' + t('notes_empty_title') + '</div>' +
        '<div class="notes-empty-text">' + t('notes_empty_text') + '</div>' +
      '</div>';
      return;
    }

    // Group by date
    var groups = {};
    for (var i = 0; i < notes.length; i++) {
      var note = notes[i];
      var dateStr = new Date(note.date).toLocaleDateString(
        state.lang === 'se' ? 'sv-SE' : 'en-GB',
        { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      );
      if (!groups[dateStr]) groups[dateStr] = [];
      groups[dateStr].push(note);
    }

    var html = '';
    var dateKeys = Object.keys(groups);
    for (var d = 0; d < dateKeys.length; d++) {
      html += '<div class="notes-date-group">';
      html += '<div class="notes-date-label">' + dateKeys[d] + '</div>';

      var groupNotes = groups[dateKeys[d]];
      for (var n = 0; n < groupNotes.length; n++) {
        var note = groupNotes[n];
        html += '<div class="note-item">' +
          '<div class="note-item-header">' +
            '<span class="note-item-mood">' + (note.mood || '📝') + '</span>' +
            '<span class="note-item-name">' + escapeHtml(note.exerciseName) + '</span>' +
            (note.effort ? '<span class="note-item-effort">⚡ ' + note.effort + '/5</span>' : '') +
          '</div>' +
          (note.note ? '<div class="note-item-text">' + escapeHtml(note.note) + '</div>' : '') +
        '</div>';
      }

      html += '</div>';
    }

    listEl.innerHTML = html;
  }

  // =============================================
  // RENDER: PROGRESS
  // =============================================
  function renderProgress() {
    var container = $('#progressContainer');
    if (!container) return;

    var pct = getOverallPercent();
    var circumference = 259;
    var offset = circumference - (circumference * (pct / 100));

    var html = '<div class="progress-view-header">' +
      '<h2>' + t('progress_title') + '</h2>' +
      '<p>' + t('progress_sub') + '</p>' +
    '</div>';

    // Overall circular progress
    html += '<div class="progress-card">' +
      '<div class="progress-card-header">' +
        '<span class="progress-card-icon">🎯</span>' +
        '<span class="progress-card-title">' + t('progress_overall') + '</span>' +
      '</div>' +
      '<div class="progress-overall-row">' +
        '<div class="progress-circle">' +
          '<svg class="progress-ring" viewBox="0 0 100 100">' +
            '<circle class="progress-ring-bg" cx="50" cy="50" r="41" />' +
            '<circle class="progress-ring-fill" cx="50" cy="50" r="41" style="stroke-dashoffset:' + offset + '" />' +
          '</svg>' +
          '<span class="progress-circle-text">' + pct + '%</span>' +
        '</div>' +
        '<div class="progress-overall-stats">' +
          '<div class="progress-mini-stat">' +
            '<span class="progress-mini-num">' + getCompletedCount() + '</span>' +
            '<span class="progress-mini-label">' + t('stat_exercises') + '</span>' +
          '</div>' +
          '<div class="progress-mini-stat">' +
            '<span class="progress-mini-num">' + state.dailyStreak + '</span>' +
            '<span class="progress-mini-label">' + t('stat_streak') + '</span>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';

    // Stats grid
    html += '<div class="progress-stats-grid">' +
      '<div class="progress-stat-card">' +
        '<div class="progress-stat-icon">📋</div>' +
        '<span class="progress-stat-value">' + getTotalSessions() + '</span>' +
        '<span class="progress-stat-label">' + t('stat_sessions') + '</span>' +
      '</div>' +
      '<div class="progress-stat-card">' +
        '<div class="progress-stat-icon">💪</div>' +
        '<span class="progress-stat-value">' + getCompletedCount() + '</span>' +
        '<span class="progress-stat-label">' + t('stat_exercises') + '</span>' +
      '</div>' +
      '<div class="progress-stat-card">' +
        '<div class="progress-stat-icon">🔥</div>' +
        '<span class="progress-stat-value">' + state.dailyStreak + '</span>' +
        '<span class="progress-stat-label">' + t('stat_streak') + '</span>' +
      '</div>' +
      '<div class="progress-stat-card">' +
        '<div class="progress-stat-icon">🏆</div>' +
        '<span class="progress-stat-value">' + state.longestStreak + '</span>' +
        '<span class="progress-stat-label">' + t('stat_longest') + '</span>' +
      '</div>' +
    '</div>';

    // Week-by-week progress
    html += '<div class="progress-card">' +
      '<div class="progress-card-header">' +
        '<span class="progress-card-icon">📅</span>' +
        '<span class="progress-card-title">' + t('progress_weekly') + '</span>' +
      '</div>' +
      '<div class="progress-week-list">';

    var weeks = getWeeks();
    for (var i = 0; i < weeks.length; i++) {
      var w = weeks[i];
      var wPct = getWeekPercent(w.id);
      var isDone = wPct === 100;

      html += '<div class="progress-week-item' + (isDone ? ' done' : '') + '">' +
        '<div class="progress-week-left">' +
          '<div class="progress-week-icon">' + (w.icon || '📋') + '</div>' +
          '<div class="progress-week-name">' + escapeHtml(w.title || ('Week ' + w.id)) + '</div>' +
        '</div>' +
        '<div class="progress-week-right">' +
          '<div class="progress-week-bar"><div class="progress-week-bar-fill" style="width:' + wPct + '%"></div></div>' +
          '<div class="progress-week-pct">' + wPct + '%</div>' +
        '</div>' +
      '</div>';
    }

    html += '</div></div>';

    // Streak calendar (last 30 days)
    html += '<div class="progress-card">' +
      '<div class="progress-card-header">' +
        '<span class="progress-card-icon">🗓️</span>' +
        '<span class="progress-card-title">' + t('progress_streak_cal') + '</span>' +
      '</div>' +
      '<div class="streak-calendar">';

    var dayKeys = ['cal_mon', 'cal_tue', 'cal_wed', 'cal_thu', 'cal_fri', 'cal_sat', 'cal_sun'];
    for (var di = 0; di < 7; di++) {
      html += '<div class="streak-day-header">' + t(dayKeys[di]) + '</div>';
    }

    var today = new Date();
    today.setHours(0, 0, 0, 0);
    // Find the Monday of this week (or go back to include 30 days)
    var startDate = new Date(today);
    startDate.setDate(startDate.getDate() - 29);
    // Align to Monday
    var dayOfWeek = startDate.getDay();
    var mondayOffset = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    startDate.setDate(startDate.getDate() - mondayOffset);

    var todayString = todayStr();
    for (var ci = 0; ci < 35; ci++) { // 5 weeks
      var cDate = new Date(startDate);
      cDate.setDate(cDate.getDate() + ci);
      var cy = cDate.getFullYear();
      var cm = String(cDate.getMonth() + 1).padStart(2, '0');
      var cd = String(cDate.getDate()).padStart(2, '0');
      var cStr = cy + '-' + cm + '-' + cd;
      var isActive = state.activeDays.indexOf(cStr) !== -1;
      var isToday = cStr === todayString;
      var classes = 'streak-day';
      if (isActive) classes += ' active';
      if (isToday) classes += ' today';

      html += '<div class="' + classes + '">' + cDate.getDate() + '</div>';
    }

    html += '</div></div>';

    container.innerHTML = html;
  }

  // =============================================
  // RENDER: SETTINGS
  // =============================================
  function renderSettings() {
    var container = $('#settingsContainer');
    if (!container) return;

    var html = '<div class="settings-header">' +
      '<h2>' + t('settings_title') + '</h2>' +
      '<p>' + t('settings_sub') + '</p>' +
    '</div>';

    // Language
    html += '<div class="settings-group">' +
      '<div class="settings-group-title">' + t('settings_lang') + '</div>' +
      '<div class="settings-item">' +
        '<div class="settings-item-left">' +
          '<span class="settings-item-icon">🌐</span>' +
          '<div>' +
            '<div class="settings-item-label">' + t('settings_lang') + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="lang-toggle">' +
          '<button class="lang-toggle-btn' + (state.lang === 'se' ? ' active' : '') + '" data-lang="se">🇸🇪 Svenska</button>' +
          '<button class="lang-toggle-btn' + (state.lang === 'en' ? ' active' : '') + '" data-lang="en">🇬🇧 English</button>' +
        '</div>' +
      '</div>' +
    '</div>';

    // Data
    html += '<div class="settings-group">' +
      '<div class="settings-group-title">' + t('settings_data') + '</div>' +
      '<button class="danger-btn" id="resetDataBtn">' + t('reset_data') + '</button>' +
      '<p style="font-size:12px;color:#95D5B2;margin-top:8px;padding:0 4px">' + t('reset_desc') + '</p>' +
    '</div>';

    // About
    html += '<div class="settings-group">' +
      '<div class="settings-group-title">' + t('settings_about') + '</div>' +
      '<div class="about-section">' +
        '<div class="about-logo">🫁</div>' +
        '<div class="about-name">Airway Clinic</div>' +
        '<div class="about-desc">' + t('about_desc') + '</div>' +
        '<div class="about-version">v1.0</div>' +
        '<a class="about-link" href="https://airwayclinic.se" target="_blank" rel="noopener">airwayclinic.se</a>' +
      '</div>' +
    '</div>';

    container.innerHTML = html;

    // Bind language toggle
    $$('.lang-toggle-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var newLang = btn.dataset.lang;
        if (newLang !== state.lang) {
          state.lang = newLang;
          save();
          updateI18n();
          renderSettings();
        }
      });
    });

    // Bind reset
    var resetBtn = $('#resetDataBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        showConfirm(t('reset_confirm'), function () {
          resetAllData();
        });
      });
    }
  }

  function resetAllData() {
    localStorage.removeItem(STORAGE_KEY);
    state.completedExercises = {};
    state.weekUnlocked = [1];
    state.dailyStreak = 0;
    state.longestStreak = 0;
    state.lastActiveDate = null;
    state.sessionNotes = [];
    state.activeDays = [];
    state.timers = {};
    state.repCounters = {};
    state.selectedWeek = 1;
    closeConfirm();
    updateHeaderProgress();
    showView('home');
  }

  // =============================================
  // EVENT BINDING
  // =============================================
  function bindEvents() {
    // Bottom nav
    $$('.bottom-nav-item').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.dataset.target;
        if (target) {
          if (target === 'training') {
            state.selectedWeek = getCurrentWeekId();
          }
          showView(target);
        }
      });
    });

    // Language flags in header
    $('#langSe').addEventListener('click', function () {
      if (state.lang !== 'se') {
        state.lang = 'se';
        save();
        updateI18n();
        showView(state.currentView);
      }
    });

    $('#langEn').addEventListener('click', function () {
      if (state.lang !== 'en') {
        state.lang = 'en';
        save();
        updateI18n();
        showView(state.currentView);
      }
    });

    // Start training CTA
    var ctaBtn = $('#startTrainingBtn');
    if (ctaBtn) {
      ctaBtn.addEventListener('click', function () {
        state.selectedWeek = getCurrentWeekId();
        showView('training');
      });
    }

    // Note modal
    $('#noteModalClose').addEventListener('click', closeNoteModal);
    $('#noteSaveBtn').addEventListener('click', handleNoteSave);
    $('#noteModal').addEventListener('click', function (e) {
      if (e.target === $('#noteModal')) closeNoteModal();
    });

    // Mood buttons
    $$('.mood-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        $$('.mood-btn').forEach(function (b) { b.classList.remove('selected'); });
        btn.classList.add('selected');
      });
    });

    // Effort buttons
    $$('.effort-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        $$('.effort-btn').forEach(function (b) { b.classList.remove('selected'); });
        btn.classList.add('selected');
      });
    });

    // Confirm modal
    $('#confirmCancel').addEventListener('click', closeConfirm);
    $('#confirmOk').addEventListener('click', function () {
      if (confirmCallback) confirmCallback();
    });
    $('#confirmModal').addEventListener('click', function (e) {
      if (e.target === $('#confirmModal')) closeConfirm();
    });
  }

  // =============================================
  // INIT
  // =============================================
  function init() {
    load();
    checkWeekUnlock();
    updateStreak();
    updateI18n();
    updateHeaderProgress();
    bindEvents();
    renderHome();

    // Expose for debugging
    window.__airwayState = state;
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

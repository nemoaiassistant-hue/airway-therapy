const THERAPY_DATA = {
  phases: [
    { id: "foundation", titleEn: "Foundation", titleSe: "Grundläggande", color: "#3bb6b3", icon: "🧱" },
    { id: "strength", titleEn: "Strength", titleSe: "Styrka", color: "#1a6b69", icon: "💪" },
    { id: "integration", titleEn: "Integration", titleSe: "Integrering", color: "#e8c170", icon: "🔗" },
    { id: "maintenance", titleEn: "Maintenance", titleSe: "Underhåll", color: "#2c3e50", icon: "✅" }
  ],
  weeks: [
    {
      id: 1, phaseId: "foundation",
      titleEn: "Week 1: Awareness & Nasal Breathing",
      titleSe: "Vecka 1: Medvetenhet & Näsandning",
      descEn: "This week focuses on becoming aware of your current breathing patterns and establishing nasal breathing as your default.",
      descSe: "Denna vecka fokuserar på att bli medveten om dina nuvarande andningsmönster och etablera näsandning som ditt standard.",
      exercises: [
        {
          id: "1-1", type: "timed", duration: 120, icon: "👃",
          titleEn: "Nasal Breathing Awareness",
          titleSe: "Medveten Näsandning",
          instructionsEn: "Sit up straight with feet flat on the floor. Close your mouth completely so your lips are gently sealed. Place your tongue on the roof of your mouth just behind your front teeth (The Spot). Breathe in slowly through your nose for 4 counts, hold for 2 counts, then exhale slowly through your nose for 6 counts. Focus on keeping your lips sealed the entire time.",
          instructionsSe: "Sitt rak med fötterna platta på golvet. Stäng munnen helt så att läpparna är försiktigt förslutna. Placera tungan på munnenens tak precis bakom framtänderna (Platsen). Andas in långsamt genom näsan i 4 sekunder, håll i 2 sekunder, andas ut genom näsan i 6 sekunder. Håll läpparna slutna hela tiden.",
          setsPerDay: 2,
          tipEn: "If your nose feels blocked, try gently pressing on the opposite nostril to open the blocked side.",
          tipSe: "Om näsan känns blockerad, tryck försiktigt på motsatt näsborre för att öppna den blockerade sidan."
        },
        {
          id: "1-2", type: "hold", holdSeconds: 30, icon: "👄",
          titleEn: "Lip Seal Hold",
          titleSe: "Läppförslutning",
          instructionsEn: "Press your lips together gently but firmly. Ensure no air can escape through your mouth. Your teeth should be slightly apart and your tongue should be resting on the roof of your mouth. Hold this position for 30 seconds while breathing normally through your nose.",
          instructionsSe: "Pressa läpparna försiktigt men fast mot varandra. Se till att ingen luft kan komma ut genom munnen. Tänderna ska vara lite isär och tungan ska vila på munnenens tak. Håll positionen i 30 sekunder medan du andas normalt genom näsan.",
          setsPerDay: 2,
          tipEn: "Don't purse your lips too tightly — a gentle seal is enough. Check in a mirror that no air escapes.",
          tipSe: "Tryck inte läpparna för hårt — ett försiktigt förslut räcker. Kontrollera i spegeln att ingen luft kommer ut."
        },
        {
          id: "1-3", type: "timed", duration: 120, icon: "🫁",
          titleEn: "Nostril Alternating Breathing",
          titleSe: "Växelvis Näsandning",
          instructionsEn: "Use your right thumb to close your right nostril. Breathe in slowly through the left nostril for 4 counts. Now close the left nostril with your ring finger, release the right nostril, and breathe out through the right for 6 counts. Breathe in through the right, switch, breathe out through the left. Continue alternating for 2 minutes.",
          instructionsSe: "Använd höger tumme för att stänga höger näsborre. Andas in långsamt genom vänster näsborre i 4 sekunder. Stäng vänster näsborre med ringfingret, släpp höger, andas ut genom höger i 6 sekunder. Andas in genom höger, byt, andas ut genom vänster. Fortsätt växla i 2 minuter.",
          setsPerDay: 2,
          tipEn: "Keep your mouth closed throughout. This exercise helps clear nasal passages and improves awareness of nasal breathing.",
          tipSe: "Håll munnen stängd hela tiden. Denna övning hjälper till att rensa näspassagerna och ökar medvetenheten om näsandning."
        },
        {
          id: "1-4", type: "hold", holdSeconds: 10, icon: "👅",
          titleEn: "Tongue Spot Finding",
          titleSe: "Hitta Tungans Plats",
          instructionsEn: "Open your mouth slightly. Place the tip of your tongue on the small raised area just behind your upper front teeth on the roof of your mouth. This is called The Spot (incisive papilla). Now suction your whole tongue up against the palate — the tip, middle, and back should all touch the roof. Hold for 10 seconds, then release and repeat.",
          instructionsSe: "Öppna munnen lite. Placera tungspetsen på det lilla upphöjda området precis bakom övre framtänderna på munnenens tak. Detta kallas Platsen. Sug nu upp hela tungan mot gommen — spetsen, mitten och baksidan ska alla röra taket. Håll i 10 sekunder, släpp och upprepa.",
          setsPerDay: 2,
          tipEn: "Common mistake: only the tongue tip lifts. Make sure the middle and back of your tongue also press up against the palate.",
          tipSe: "Vanligt misstag: bara tungspetsen lyfts. Se till att mitten och baksidan av tungan också trycker upp mot gommen."
        },
        {
          id: "1-5", type: "timed", duration: 60, icon: "🧘",
          titleEn: "Rest Posture Check",
          titleSe: "Vila Attityd Kontroll",
          instructionsEn: "Sit or stand in your natural position. Now check these four things: 1) Are your lips gently sealed? 2) Are your teeth slightly apart (not clenched)? 3) Is your tongue resting on the roof of your mouth? 4) Are you breathing through your nose? Correct any that are wrong and hold the correct position for 60 seconds.",
          instructionsSe: "Sitt eller stå i din naturliga position. Kontrollera nu fyra saker: 1) Är läpparna försiktigt förslutna? 2) Är tänderna lite isär (inte sammanpressade)? 3) Vilar tungan på munnenens tak? 4) Andas du genom näsan? Korrigera eventuella fel och håll rätt position i 60 sekunder.",
          setsPerDay: 2,
          tipEn: "Your rest posture matters more than exercises — your tongue should be on the palate 24/7 when not eating or speaking.",
          tipSe: "Din viloposition är viktigare än övningar — tungan ska vara på gommen dygnet runt när du inte äter eller pratar."
        }
      ]
    },
    {
      id: 2, phaseId: "foundation",
      titleEn: "Week 2: Tongue Positioning",
      titleSe: "Vecka 2: Tungpositionering",
      descEn: "This week builds your tongue awareness and strength with exercises that train correct tongue placement on the palate.",
      descSe: "Denna vecka bygger tungmedvetenhet och styrka med övningar som tränar korrekt tungplacering på gommen.",
      exercises: [
        {
          id: "2-1", type: "hold", holdSeconds: 5, icon: "➡️",
          titleEn: "Tongue Slide",
          titleSe: "Tungans Glidning",
          instructionsEn: "Place the tip of your tongue just behind your upper front teeth on the hard palate. Slowly slide your tongue backwards along the roof of your mouth towards the soft palate. Keep the tongue pressed flat against the palate the entire time. Hold at the back for 5 seconds, then slide back to the front. That is one repetition.",
          instructionsSe: "Placera tungspetsen precis bakom övre framtänderna på hårda gommen. Glid långsamt tungan bakåt längs munnenens tak mot mjuka gommen. Håll tungen platt mot gommen hela tiden. Håll i bak i 5 sekunder, glid sedan tillbaka till framsidan. Det är en repetition.",
          setsPerDay: 2,
          tipEn: "The entire tongue should stay in contact with the palate — don't let the middle or back drop away.",
          tipSe: "Hela tungan ska ha kontakt med gommen — låt inte mitten eller baksida släppa."
        },
        {
          id: "2-2", type: "hold", holdSeconds: 10, icon: "⬆️",
          titleEn: "Tongue-to-Palate Hold",
          titleSe: "Tunga-mot-Gommen Håll",
          instructionsEn: "Open your mouth slightly. Place your entire tongue flat against the hard palate — from the tip behind your front teeth all the way to the back. Suction your tongue up so it sticks to the roof of your mouth. Hold for 10 seconds. Make sure both the tip AND the back of your tongue are pressing up.",
          instructionsSe: "Öppna munnen lite. Placera hela tungan platt mot hårda gommen — från spetsen bakom framtänderna hela vägen bak. Suga upp tungan så den fäster vid munnenens tak. Håll i 10 sekunder. Se till att både spetsen OCH baksidan av tungan trycker upp.",
          setsPerDay: 2,
          tipEn: "You should feel a gentle suction. If it feels effortful, you're probably pressing too hard — think of it as a light seal.",
          tipSe: "Du bör känna ett försiktigt sug. Om det känns ansträngande trycker du för hårt — tänk på det som ett lätt förslut."
        },
        {
          id: "2-3", type: "timed", duration: 30, icon: "🔊",
          titleEn: "Tongue Click Exercise",
          titleSe: "Tungklick-övning",
          instructionsEn: "Press the tip of your tongue against the roof of your mouth just behind your upper front teeth. Quickly pull the tongue down to create a clicking sound. Repeat this clicking motion continuously for 30 seconds. Focus on the speed and precision of the movement.",
          instructionsSe: "Pressa tungspetsen mot munnenens tak precis bakom övre framtänderna. Dra snabbt ner tungan för att skapa ett klickljud. Upprepa denna klickrörelse kontinuerligt i 30 sekunder. Fokusera på hastighet och precision.",
          setsPerDay: 2,
          tipEn: "This strengthens the tongue tip and improves coordination. The click should be sharp and clear.",
          tipSe: "Detta stärker tungspetsen och förbättrar koordinationen. Klicket ska vara skarpt och tydligt."
        },
        {
          id: "2-4", type: "hold", holdSeconds: 5, icon: "💪",
          titleEn: "Tongue Push-Up",
          titleSe: "Tungans Upptryck",
          instructionsEn: "Place the tip of your tongue on the roof of your mouth just behind your upper front teeth. Push upward firmly as if trying to push through the palate. You should feel the muscles under your chin engaging. Hold the upward pressure for 5 seconds, then release gently.",
          instructionsSe: "Placera tungspetsen på munnenens tak precis bakom övre framtänderna. Tryck uppåt kraftfullt som om du försökte trycka genom gommen. Du bör känna musklerna under hakan aktiveras. Håll upppressningen i 5 sekunder, släpp sedan försiktigt.",
          setsPerDay: 2,
          tipEn: "Place a finger under your chin — you should feel the muscle tighten when you push up. If not, the correct muscles aren't engaging.",
          tipSe: "Placera ett finger under hakan — du bör känna muskeln spännas när du trycker upp. Om inte, aktiveras inte rätt muskler."
        },
        {
          id: "2-5", type: "timed", duration: 60, icon: "🔄",
          titleEn: "Palate Trace",
          titleSe: "Gomspårning",
          instructionsEn: "With your mouth slightly open, slowly trace the entire hard palate with the tip of your tongue. Start behind the front teeth, go left to the molars, then back across the middle, then right to the molars, and back. Move in a systematic pattern covering every area of the palate. Continue for 60 seconds.",
          instructionsSe: "Med munnen lite öppen, spåra långsamt hela hårda gommen med tungspetsen. Börja bakom framtänderna, gå vänster till kindtänderna, sedan tillbaka över mitten, sedan höger till kindtänderna och tillbaka. Rör dig i ett systematiskt mönster över hela gommen. Fortsätt i 60 sekunder.",
          setsPerDay: 2,
          tipEn: "Go slowly — this is about building neural pathways and spatial awareness, not speed.",
          tipSe: "Gå långsamt — detta handlar om att bygga neurala banor och rumsmedvetenhet, inte hastighet."
        }
      ]
    },
    {
      id: 3, phaseId: "foundation",
      titleEn: "Week 3: Lip & Cheek Strengthening",
      titleSe: "Vecka 3: Läpp- & Kindstärkning",
      descEn: "Strong lips and cheeks are essential for maintaining a lip seal and nasal breathing. This week targets the orbicularis oris and buccinator muscles.",
      descSe: "Starka läppar och kinder är viktiga för att bibehålla läppförslutning och näsandning. Denna vecka tränar orbicularis oris och buccinator-musklerna.",
      exercises: [
        {
          id: "3-1", type: "hold", holdSeconds: 10, icon: "😗",
          titleEn: "Lip Stretch & Hold",
          titleSe: "Läppsträckning",
          instructionsEn: "Stretch your lips into a wide, tight smile. You should feel the muscles at the corners of your mouth working. Hold this stretched position for 10 seconds. Then relax back to a gentle lip seal (lips together, teeth slightly apart, tongue on palate). Repeat.",
          instructionsSe: "Sträck läpparna till ett brett, fast leende. Du bör känna musklerna i mungiporna arbeta. Håll den utsträckta positionen i 10 sekunder. Slappna sedan av till ett försiktigt läppförslut (läpparna tillsammans, tänderna lite isär, tungan på gommen). Upprepa.",
          setsPerDay: 2,
          tipEn: "Don't squint your eyes — keep your face relaxed except for the lip stretch. The effort should be only in the lips.",
          tipSe: "Kisa inte med ögonen — håll ansiktet avslappnat förutom läppsträckningen. Ansträngningen ska bara vara i läpparna."
        },
        {
          id: "3-2", type: "hold", holdSeconds: 10, icon: "👉",
          titleEn: "Cheek Push with Finger",
          titleSe: "Kindtryck med Finger",
          instructionsEn: "Wash your hands first. Place your index finger inside your cheek against the buccinator muscle (the main cheek muscle). Push outward with your finger while simultaneously pushing inward with your cheek muscle to resist. Hold the resistance for 10 seconds. Repeat on both sides.",
          instructionsSe: "Tvätta händerna först. Placera pekfinger inne i kinden mot buccinator-muskeln (huvud kindmuskel). Tryck utåt med fingret samtidigt som du trycker inåt med kindmuskeln för att motstå. Håll motståndet i 10 sekunder. Upprepa på båda sidor.",
          setsPerDay: 2,
          tipEn: "The cheek should push back firmly against your finger. If it doesn't, the muscle needs more strengthening — this exercise is key for mouth closure.",
          tipSe: "Kinden ska trycka tillbaka fast mot fingret. Om inte, behöver muskeln mer styrketräning — denna övning är nyckeln för munförslutning."
        },
        {
          id: "3-3", type: "timed", duration: 60, icon: "🦷",
          titleEn: "Gum Chewing Exercise",
          titleSe: "Tuggummi-övning",
          instructionsEn: "With your mouth completely closed (lips sealed, teeth slightly apart), mimic the chewing motion of chewing gum. While chewing, make a soft humming sound (mmmmm). Keep your tongue on the roof of your mouth during the exercise. Continue for 60 seconds.",
          instructionsSe: "Med munnen helt stängd (läpparna förslutna, tänderna lite isär), härma tuggmönstret från tuggummi. Medan du tuggar, gör ett mjukt hummande ljud (mmmmm). Håll tungan på munnenens tak under övningen. Fortsätt i 60 sekunder.",
          setsPerDay: 2,
          tipEn: "The humming strengthens the soft palate and throat muscles. This is great before bedtime — it also promotes nasal breathing during sleep.",
          tipSe: "Hummandet stärker mjuka gommen och halsmusklerna. Perfekt innan sängdags — det främjar också näsandning under sömnen."
        },
        {
          id: "3-4", type: "hold", holdSeconds: 10, icon: "💋",
          titleEn: "Lip Pucker Hold",
          titleSe: "Läppkrusböjning",
          instructionsEn: "Pucker your lips forward tightly as if going to kiss something. Hold the puckered position for 10 seconds. Then relax back to a natural lip seal. Focus on feeling the orbicularis oris muscle (the muscle around your lips) working.",
          instructionsSe: "Kryssa läpparna framåt tätt som om du skulle kyssa något. Håll den kryssade positionen i 10 sekunder. Slappna sedan av till ett naturligt läppförslut. Fokusera på att känna orbicularis oris-muskeln (muskeln runt läpparna) arbeta.",
          setsPerDay: 2,
          tipEn: "This directly targets the lip seal muscles. Strong orbicularis oris = effortless lip seal during rest.",
          tipSe: "Detta tränar direkt läppförslutningsmusklerna. Stark orbicularis oris = ansträngningslöst läppförslut under vila."
        },
        {
          id: "3-5", type: "hold", holdSeconds: 5, icon: "😊",
          titleEn: "Corner Pull Smile",
          titleSe: "Hörndraget Leende",
          instructionsEn: "Using only your cheek muscles (not your hands), pull the corners of your mouth up and outward into a wide smile. Hold for 5 seconds. You should feel the muscles in your cheeks and at the corners of your mouth working. Relax and repeat.",
          instructionsSe: "Använd bara kindmusklerna (inte händerna), dra upp mungiporna i ett brett leende. Håll i 5 sekunder. Du bör känna musklerna i kinderna och mungiporna arbeta. Slappna av och upprepa.",
          setsPerDay: 2,
          tipEn: "This exercise helps with facial muscle tone which supports proper lip seal and reduces mouth breathing tendency.",
          tipSe: "Denna övning hjälper till med ansiktsmuskulaturen som stöder korrekt läppförslut och minskar tendensen till munandning."
        }
      ]
    },
    {
      id: 4, phaseId: "foundation",
      titleEn: "Week 4: Tongue Range of Motion",
      titleSe: "Vecka 4: Tungans Rörlighet",
      descEn: "This week focuses on maximizing your tongue's range of motion — essential for full palate contact and proper swallowing.",
      descSe: "Denna vecka fokuserar på att maximera tungans rörlighet — viktigt för full gomkontakt och korrekt sväljning.",
      exercises: [
        {
          id: "4-1", type: "hold", holdSeconds: 10, icon: "⬆️",
          titleEn: "Tongue Up / Down",
          titleSe: "Tungan Upp / Ner",
          instructionsEn: "Open your mouth slightly. Stick your tongue out and try to reach your nose with the tip. Hold for 10 seconds. Then bring the tip down and try to reach your chin. Hold for 10 seconds. Alternate between nose and chin directions. That counts as one rep per direction.",
          instructionsSe: "Öppna munnen lite. Stik ut tungan och försök nå näsan med spetsen. Håll i 10 sekunder. Föra sedan spetsen ner och försök nå hakan. Håll i 10 sekunder. Växla mellan näsa och haka. Det räknas som en rep per riktning.",
          setsPerDay: 2,
          tipEn: "Keep your jaw relaxed — don't use your jaw to help the tongue reach further.",
          tipSe: "Håll käkarna avslappnade — använd inte käken för att hjälpa tungan nå längre."
        },
        {
          id: "4-2", type: "hold", holdSeconds: 10, icon: "⬅️",
          titleEn: "Tongue Left / Right",
          titleSe: "Tungan Vänster / Höger",
          instructionsEn: "Stick your tongue straight out. Move it as far to the left as possible without moving your jaw. Hold for 10 seconds. Now move it as far to the right as possible. Hold for 10 seconds. Your jaw should stay centered throughout.",
          instructionsSe: "Stik ut tungan rakt. Flytta den så långt till vänster som möjligt utan att flytta käken. Håll i 10 sekunder. Flytta sedan så långt till höger som möjligt. Håll i 10 sekunder. Käken ska förbli centrerad hela tiden.",
          setsPerDay: 2,
          tipEn: "If your tongue can't reach far to one side, that's normal — it will improve over the coming weeks.",
          tipSe: "Om tungan inte når långt till ena sidan är det normalt — det kommer att förbättras under de kommande veckorna."
        },
        {
          id: "4-3", type: "hold", holdSeconds: 10, icon: "🌀",
          titleEn: "Tongue Roll",
          titleSe: "Tungvallning",
          instructionsEn: "Roll the edges of your tongue upward toward the middle, creating a taco or tube shape. Stick the rolled tongue out of your mouth while maintaining the roll. Hold for 10 seconds. If you can't roll your tongue, that's genetic — skip this exercise and do extra reps of the others.",
          instructionsSe: "Rulla tungans kanter uppåt mot mitten och skapa en taco- eller rörform. Stick ut den rullade tungan ur munnen och behåll rullen. Håll i 10 sekunder. Om du inte kan rulla tungan är det genetiskt — hoppa över denna övning och gör extra reps av de andra.",
          setsPerDay: 2,
          tipEn: "About 30% of people cannot roll their tongue genetically. If that's you, replace with extra Tongue Slide reps.",
          tipSe: "Ungefär 30% av befolkningen kan inte rulla tungan pga genetik. Om det gäller dig, ersätt med extra Tungglidning-reps."
        },
        {
          id: "4-4", type: "hold", holdSeconds: 10, icon: "🥄",
          titleEn: "Spoon Push Exercise",
          titleSe: "Skedtrycksövning",
          instructionsEn: "Hold a clean spoon horizontally in front of your lips. Place the tip of your tongue against the back of the spoon. Push forward firmly against the spoon. Keep your tongue straight — don't let it point downward. Hold the push for 10 seconds.",
          instructionsSe: "Håll en ren sked horisontellt framför läpparna. Placera tungspetsen mot baksidan av skeden. Tryck framåt kraftfullt mot skeden. Håll tungan rak — låt den inte peka neråt. Håll trycket i 10 sekunder.",
          setsPerDay: 2,
          tipEn: "Use the back of the spoon for safety. This exercise strengthens the genioglossus muscle — your main tongue muscle.",
          tipSe: "Använd baksidan av skeden för säkerhet. Denna övning stärker genioglossus-muskeln — din huvud tungmuskeln."
        },
        {
          id: "4-5", type: "hold", holdSeconds: 10, icon: "👅",
          titleEn: "Tongue Stretch to Chin",
          titleSe: "Tungsträckning mot Hakan",
          instructionsEn: "Stick your tongue out as far as possible, trying to reach your chin. Tilt your head slightly upward to maximize the stretch. Hold the stretched position for 10 seconds. You should feel a gentle pull along the underside of your tongue. Relax and repeat.",
          instructionsSe: "Stik ut tungan så långt som möjligt och försök nå hakan. Luta huvudet lite uppåt för att maximera sträckningen. Håll den utsträckta positionen i 10 sekunder. Du bör känna ett försiktigt drag under tungan. Slappna av och upprepa.",
          setsPerDay: 2,
          tipEn: "This stretches the frenulum (the string under your tongue) and improves tongue mobility for swallowing.",
          tipSe: "Detta sträcker frenulum (sena under tungan) och förbättrar tungans rörlighet för sväljning."
        }
      ]
    },
    {
      id: 5, phaseId: "strength",
      titleEn: "Week 5: Tongue Strengthening",
      titleSe: "Vecka 5: Tungstärkning",
      descEn: "Now that you have good range of motion and awareness, we increase the intensity. This week focuses on building real tongue strength.",
      descSe: "Nu när du har god rörlighet och medvetenhet ökar vi intensiteten. Denna vecka fokuserar på att bygga riktig tungstyrka.",
      exercises: [
        {
          id: "5-1", type: "hold", holdSeconds: 10, icon: "💪",
          titleEn: "Tongue Push-Up with Pressure",
          titleSe: "Tungans Upptryck med Tryck",
          instructionsEn: "Place your tongue on the roof of your mouth behind your front teeth. Push upward against the palate as hard as you can, as if trying to lift the roof of your mouth. You should feel the muscles under your chin engaging strongly. Hold maximum pressure for 10 seconds. Release slowly.",
          instructionsSe: "Placera tungan på munnenens tak bakom framtänderna. Tryck uppåt mot gommen så hårt du kan, som om du försökte lyfta munnenens tak. Du bör känna musklerna under hakan aktiveras kraftigt. Håll maximalt tryck i 10 sekunder. Släpp långsamt.",
          setsPerDay: 2,
          tipEn: "Place two fingers under your chin — you should feel strong muscle engagement. If not, focus on pressing the back of the tongue up, not just the tip.",
          tipSe: "Placera två fingrar under hakan — du bör känna stark muskelaktivering. Om inte, fokusera på att trycka baksidan av tungan upp, inte bara spetsen."
        },
        {
          id: "5-2", type: "hold", holdSeconds: 10, icon: "⬆️",
          titleEn: "Palatal Press — Posterior",
          titleSe: "Gomtryck — Posterior",
          instructionsEn: "This time, focus on the BACK of your tongue. Place the back third of your tongue against the soft palate (the soft area at the very back of the roof of your mouth). Press upward firmly. You may need to make a slight 'ng' sound to find the right position. Hold the press for 10 seconds.",
          instructionsSe: "Den här gången, fokusera på BAKSIDAN av tungan. Placera den bakre tredjedelen av tungan mot mjuka gommen (det mjuka området längst bak på munnenens tak). Tryck uppåt fast. Du kanske behöver göra ett litet 'ng'-ljud för att hitta rätt position. Håll trycket i 10 sekunder.",
          setsPerDay: 2,
          tipEn: "The soft palate is crucial for airway stability. This exercise targets the muscles that keep your airway open during sleep.",
          tipSe: "Mjuka gommen är avgörande för luftvägsstabilitet. Denna övning tränar musklerna som håller luftvägarna öppna under sömnen."
        },
        {
          id: "5-3", type: "hold", holdSeconds: 10, icon: "⬆️⬇️",
          titleEn: "Tongue Force Up & Down",
          titleSe: "Tungkraft Upp & Ner",
          instructionsEn: "Part 1: Press your entire tongue upward against the hard palate with maximum force. Hold for 10 seconds. Part 2: Force your tongue downward so it rests on the floor of your mouth with the tip touching the back of your lower teeth. Press down firmly. Hold for 10 seconds. Alternate between up and down.",
          instructionsSe: "Del 1: Pressa hela tungan uppåt mot hårda gommen med maximal kraft. Håll i 10 sekunder. Del 2: Tvinga tungan neråt så den vilar på munbotten med spetsen vid baksidan av undertänderna. Pressa ner fast. Håll i 10 sekunder. Växla mellan upp och ner.",
          setsPerDay: 2,
          tipEn: "This works the tongue in both directions, building balanced strength. Think of it as a gym exercise for your tongue.",
          tipSe: "Detta tränar tungan i båda riktningarna och bygger balanserad styrka. Tänk på det som ett gym för tungan."
        },
        {
          id: "5-4", type: "hold", holdSeconds: 10, icon: "🔘",
          titleEn: "Button Pull Exercise",
          titleSe: "Knapptrycksövning",
          instructionsEn: "Thread a clean piece of string through a button (about 2cm wide). Place the button between your lips (not your teeth). Purse your lips tightly around the button. Have someone (or use your hand) gently pull the string while you resist with your lip muscles. Hold for 10 seconds without letting the button slip out.",
          instructionsSe: "Trä en ren tråd genom en knapp (ca 2cm bred). Placera knappen mellan läpparna (inte tänderna). Kryssa läpparna tätt runt knappen. Låt någon (eller använd handen) försiktigt dra i tråden medan du motstår med läppmusklerna. Håll i 10 sekunder utan att knappen glider ut.",
          setsPerDay: 2,
          tipEn: "If you don't have a button, you can use a clean coin held between the lips instead. The resistance is what matters.",
          tipSe: "Om du inte har en knapp kan du använda ett rent mynt mellan läpparna istället. Motståndet är det viktiga."
        },
        {
          id: "5-5", type: "timed", duration: 120, icon: "📝",
          titleEn: "Progress Review",
          titleSe: "Framstegsgranskning",
          instructionsEn: "Spend 2 minutes reviewing all exercises from weeks 1-4. Perform each exercise once with full focus on proper form. Notice what feels easier now compared to week 1. This self-assessment is important for tracking your progress.",
          instructionsSe: "Spendera 2 minuter på att granska alla övningar från vecka 1-4. Utför varje övning en gång med fullt fokus på korrekt form. Märk vad som känns lättare nu jämfört med vecka 1. Denna självbedömning är viktig för att följa dina framsteg.",
          setsPerDay: 2,
          tipEn: "Keep a note of which exercises feel easy and which still need work. Share this with your therapist at your next appointment.",
          tipSe: "Notera vilka övningar som känns lätta och vilka som fortfarande behöver arbete. Dela detta med din terapeut vid nästa besök."
        }
      ]
    },
    {
      id: 6, phaseId: "strength",
      titleEn: "Week 6: Swallow Retraining",
      titleSe: "Vecka 6: Sväljningsträning",
      descEn: "Correct swallowing is one of the three pillars of myofunctional therapy. This week retrains your swallow pattern from tongue thrust to correct palatal swallow.",
      descSe: "Korrekt sväljning är en av de tre pelarna i myofunktionell terapi. Denna vecka omtränar ditt sväljmönster från tungtryck till korrekt gomsvälj.",
      exercises: [
        {
          id: "6-1", type: "reps", icon: "🥤",
          titleEn: "Straw Swallow Training",
          titleSe: "Halm-Sväljträning",
          instructionsEn: "Fill a glass with water. Use a thin straw. Seal your lips around the straw (no leakage). Place your tongue on the spot on the palate. Take a sip of water and swallow while keeping your tongue pressed up. You should feel the swallow happen WITHOUT the tongue pushing forward against the teeth.",
          instructionsSe: "Fyll ett glas med vatten. Använd en tunn halm. Förslut läpparna runt halmen (inget läckage). Placera tungan på platsen på gommen. Ta en klunk vatten och svälj med tungan pressad uppåt. Du bör känna att sväljningen sker UTAN att tungan trycker framåt mot tänderna.",
          setsPerDay: 2,
          tipEn: "The straw forces you to maintain a lip seal. A thinner straw requires more effort and builds strength faster.",
          tipSe: "Halmen tvingar dig att bibehålla läppförslutning. En tunnare halm kräver mer ansträngning och bygger styrka snabbare."
        },
        {
          id: "6-2", type: "reps", icon: "💧",
          titleEn: "Water Swallow — Correct Pattern",
          titleSe: "Vattensvälj — Korrekt Mönster",
          instructionsEn: "Take a small sip of water. Hold it in the front of your mouth. Now place your tongue on the spot. Lips sealed, teeth slightly apart. Swallow the water by moving the tongue UP and BACK along the palate — like a wave rolling backward. Your tongue should NOT push against your front teeth.",
          instructionsSe: "Ta en liten klunk vatten. Håll den i framsidan av munnen. Placera tungan på platsen. Läpparna förslutna, tänderna lite isär. Svälj vattnet genom att flytta tangan UPP och BAKÅT längs gommen — som en våg som rullar bakåt. Tungan ska INTE trycka mot framtänderna.",
          setsPerDay: 2,
          tipEn: "The correct swallow is an upward-backward motion. Tongue thrust (forward against teeth) is the most common dysfunction we're correcting.",
          tipSe: "Korrekt svälj är en uppåt-bakåt rörelse. Tungtryck (framåt mot tänderna) är den vanligaste dysfunktionen vi korrigerar."
        },
        {
          id: "6-3", type: "reps", icon: "😬",
          titleEn: "Tongue Clench Swallow",
          titleSe: "Tungskvabb Sväljning",
          instructionsEn: "Gently hold the tip of your tongue between your upper and lower front teeth — do NOT bite hard. Now perform 5 swallows while maintaining this light hold. You'll feel the tongue muscles working against the resistance of the teeth. This builds tongue strength for proper swallow patterns.",
          instructionsSe: "Håll försiktigt tungspetsen mellan övre och undre framtänder — bit INTE hårt. Utför nu 5 sväljningar medan du behåller detta lätta grepp. Du kommer att känna tungmusklerna arbeta mot tändernas motstånd. Detta bygger tungstyrka för korrekt sväljmönster.",
          setsPerDay: 2,
          tipEn: "Bite very gently — the purpose is to create a small amount of resistance for the tongue muscles, not to cause pain.",
          tipSe: "Bit mycket försiktigt — syftet är att skapa ett litet motstånd för tungmusklerna, inte att orsaka smärta."
        },
        {
          id: "6-4", type: "reps", icon: "🫁",
          titleEn: "Dry Swallow Practice",
          titleSe: "Torrsjäljningsövning",
          instructionsEn: "With no food or liquid, perform a dry swallow. Before swallowing: ensure lips are sealed, teeth slightly apart, tongue resting on the palate. Swallow your saliva. Focus on the tongue moving upward and backward — not forward. The swallow should be silent and smooth.",
          instructionsSe: "Utan mat eller vätska, utför en torr sväljning. Innan svälj: se till att läpparna är förslutna, tänderna lite isär, tungen vilar på gommen. Svälj saliven. Fokusera på att tungan rör sig uppåt och bakåt — inte framåt. Sväljningen ska vara tyst och mjuk.",
          setsPerDay: 2,
          tipEn: "We swallow about 1000 times per day. Every incorrect swallow reinforces bad habits — retraining this is one of the most impactful things you can do.",
          tipSe: "Vi sväljer ungefär 1000 gånger per dag. Varje felaktig sväljning förstärker dåliga vanor — att omträna detta är en av de mest betydelsefulla sakerna du kan göra."
        },
        {
          id: "6-5", type: "timed", duration: 60, icon: "💦",
          titleEn: "Saliva Swallow Focus",
          titleSe: "Salivsväljningsfokus",
          instructionsEn: "For 60 seconds, focus entirely on your natural saliva swallows. Each time you feel the urge to swallow, first check: lips sealed? Tongue on palate? Then swallow consciously with the correct pattern (up and back). Don't force swallows — just let them happen naturally but with awareness.",
          instructionsSe: "I 60 sekunder, fokusera helt på dina naturliga salivsväljningar. Varje gång du känner lusten att svälja, kontrollera först: läpparna förslutna? Tungan på gommen? Svälj sedan medvetet med korrekt mönster (upp och bak). Tvinga inte sväljningar — låt dem ske naturligt men medvetet.",
          setsPerDay: 2,
          tipEn: "This is mindfulness for swallowing. The goal is to make the correct pattern automatic — that starts with conscious awareness.",
          tipSe: "Detta är mindfulness för sväljning. Målet är att göra korrekt mönster automatiskt — det börjar med medveten närvaro."
        }
      ]
    }
    ,
    {
      id: 7, phaseId: "strength",
      titleEn: "Week 7: Combined Exercises",
      titleSe: "Vecka 7: Kombinerade Övningar",
      descEn: "This week combines everything you've learned into flowing routines. Exercises are longer and more demanding, building endurance.",
      descSe: "Denna vecka kombinerar allt du lärt dig i flytande rutiner. Övningarna är längre och mer krävande, bygger uthållighet.",
      exercises: [
        {
          id: "7-1", type: "timed", duration: 180, icon: "📋",
          titleEn: "Full Foundation Routine",
          titleSe: "Full Grundrutin",
          instructionsEn: "Perform all foundation exercises in sequence without stopping: Nasal Breathing Awareness (30s), Lip Seal Hold (30s), Tongue Slide (5 reps), Tongue-to-Palate Hold (10s), Cheek Push (10 reps each side), Tongue Up/Down (10 reps), Tongue Left/Right (10 reps). Flow from one to the next smoothly. Total 3 minutes.",
          instructionsSe: "Utför alla grundövningar i sekvens utan uppehåll: Medveten Näsandning (30s), Läppförslutning (30s), Tungglidning (5 reps), Tunga-mot-Gommen (10s), Kindtryck (10 reps varje sida), Tunga Upp/Ner (10 reps), Tunga Vänster/Höger (10 reps). Flyta smidigt från en till nästa. Totalt 3 minuter.",
          setsPerDay: 2,
          tipEn: "This is your core daily routine going forward. Memorize the sequence so you can do it anywhere without instructions.",
          tipSe: "Detta är din kärnrutin framöver. Memorera sekvensen så du kan göra den var som helst utan instruktioner."
        },
        {
          id: "7-2", type: "hold", holdSeconds: 15, icon: "💪",
          titleEn: "Tongue Strength Progression",
          titleSe: "Tungstyrkeprogression",
          instructionsEn: "Perform all tongue strengthening exercises with increased hold time (15 seconds instead of 10): Tongue Push-Up, Palatal Press Posterior, and Tongue Force. 3 rounds of each with 15-second holds. Rest 5 seconds between exercises.",
          instructionsSe: "Utför alla tungstyrkeövningar med ökad hålltid (15 sekunder istället för 10): Tungans Upptryck, Gomtryck Posterior och Tungkraft. 3 rundor av varje med 15-sekunders håll. Vila 5 sekunder mellan övningar.",
          setsPerDay: 2,
          tipEn: "The 5-second increase makes a significant difference. If you can't hold for 15 seconds yet, hold as long as you can and build up gradually.",
          tipSe: "5 sekunders ökningen gör stor skillnad. Om du inte kan hålla i 15 sekunder ännu, håll så länge du kan och bygg upp gradvis."
        },
        {
          id: "7-3", type: "timed", duration: 180, icon: "👃",
          titleEn: "Nasal Breathing Extended",
          titleSe: "Utökad Näsandning",
          instructionsEn: "Extended breathing session using the 4-7-8 pattern: Breathe in through nose for 4 counts, hold for 7 counts, breathe out through nose for 8 counts. Maintain lip seal and tongue on palate throughout. Continue for 3 minutes. This pattern activates the parasympathetic nervous system.",
          instructionsSe: "Utökad andningssession med 4-7-8 mönstret: Andas in genom näsan i 4 sekunder, håll i 7 sekunder, andas ut genom näsan i 8 sekunder. Bibehåll läppförslutning och tungan på gommen under hela tiden. Fortsätt i 3 minuter. Detta mönster aktiverar parasympatiska nervsystemet.",
          setsPerDay: 2,
          tipEn: "The 4-7-8 pattern is calming and perfect before sleep. It may feel strange at first — the exhale is longer than you're used to.",
          tipSe: "4-7-8 mönstret är lugnande och perfekt innan sömn. Det kan kännas konstigt först — utandningen är längre än du är van vid."
        },
        {
          id: "7-4", type: "hold", holdSeconds: 10, icon: "👄👅",
          titleEn: "Combined Lip-Tongue Exercise",
          titleSe: "Kombinerad Läpp-Tungövning",
          instructionsEn: "Seal your lips firmly. Place your tongue on the palate. Now push your tongue upward against the palate while simultaneously maintaining the lip seal. You should feel both the tongue muscles AND the lip muscles engaging at the same time. Hold for 10 seconds.",
          instructionsSe: "Förslut läpparna fast. Placera tungan på gommen. Tryck nu tungan uppåt mot gommen samtidigt som du bibehåller läppförslutningen. Du bör känna både tungmusklerna OCH läppmusklerna aktiveras samtidigt. Håll i 10 sekunder.",
          setsPerDay: 2,
          tipEn: "This coordination exercise trains the two most important muscle groups to work together — essential for proper rest posture.",
          tipSe: "Denna koordinationsövning tränar de två viktigaste muskelgrupperna att arbeta tillsammans — avgörande för korrekt viloposition."
        },
        {
          id: "7-5", type: "timed", duration: 120, icon: "🌙",
          titleEn: "Evening Wind-Down",
          titleSe: "Kvällsnerplockning",
          instructionsEn: "Perform this gentle routine before bed: 1 minute of 4-7-8 nasal breathing, 10 slow tongue-to-palate holds, 1 minute of gum chewing with humming, then 30 seconds of rest posture check (lips sealed, tongue on palate, teeth apart). This routine prepares your airway for sleep.",
          instructionsSe: "Utför denna milda rutin innan sängdags: 1 minut 4-7-8 näsandning, 10 långsamma tunga-mot-gommen håll, 1 minut tuggummimimik med hummande, sedan 30 sekunder vilopositionskontroll (läpparna förslutna, tungan på gommen, tänderna isär). Denna rutin förbereder luftvägarna för sömn.",
          setsPerDay: 2,
          tipEn: "Do this every night without fail. The evening routine is the most important session for sleep apnea patients.",
          tipSe: "Gör detta varje kväll utan undantag. Kvällsrutinen är den viktigaste sessionen för sömnapnepatienter."
        }
      ]
    },
    {
      id: 8, phaseId: "integration",
      titleEn: "Week 8: Real-World Practice",
      titleSe: "Vecka 8: Verklighetsträning",
      descEn: "This week takes exercises out of the dedicated practice sessions and into your daily life. The goal is to integrate proper oral posture into everything you do.",
      descSe: "Denna vecka tar övningarna ut från dedikerade sessioner och in i ditt dagliga liv. Målet är att integrera korrekt oral attitude i allt du gör.",
      exercises: [
        {
          id: "8-1", type: "timed", duration: 120, icon: "📖",
          titleEn: "Reading Aloud Exercise",
          titleSe: "Högläsningsövning",
          instructionsEn: "Pick any book, article, or text. Read it aloud for 2 minutes while maintaining: lips sealed when not speaking, tongue resting on palate between words, breathing through your nose. Speak clearly and notice your tongue position as you form each word.",
          instructionsSe: "Välj valfri bok, artikel eller text. Läs den högt i 2 minuter medan du bibehåller: läpparna förslutna när du inte pratar, tungen vilar på gommen mellan orden, andas genom näsan. Tala tydligt och märk tungans position när du bildar varje ord.",
          setsPerDay: 2,
          tipEn: "Speaking is when most people break their oral posture. This exercise helps you maintain it even during speech.",
          tipSe: "När man pratar är det flesta bryter sin oral attitude. Denna övning hjälper dig bibehålla den även under tal."
        },
        {
          id: "8-2", type: "timed", duration: 180, icon: "🍽️",
          titleEn: "Chewing Awareness",
          titleSe: "Tuggmedvetenhet",
          instructionsEn: "During your next meal or snack, eat with full awareness for 3 minutes. Before each bite: lips sealed, tongue on palate. During chewing: lips sealed, chew slowly and evenly. Between bites: tongue returns to palate, lips seal. Notice if you open your mouth to breathe while eating.",
          instructionsSe: "Under din nästa måltid eller mellanmål, ät med full medvetenhet i 3 minuter. Före varje tugga: läpparna förslutna, tungan på gommen. Under tuggande: läpparna förslutna, tugga långsamt och jämnt. Mellan tuggor: tungan återvänder till gommen, läpparna försluts. Märk om du öppnar munnen för att andas medan du äter.",
          setsPerDay: 2,
          tipEn: "Many mouth-breathers only breathe through their nose during meals. If you can maintain nasal breathing while eating, you're making real progress.",
          tipSe: "Många munandare andas bara genom näsan vid måltider. Om du kan bibehålla näsandning under måltider gör du verkliga framsteg."
        },
        {
          id: "8-3", type: "reps", icon: "🧍",
          titleEn: "Posture Check Reminders",
          titleSe: "Attitydpåminnelser",
          instructionsEn: "Set 5 random alarms on your phone throughout the day. When each alarm goes off, stop what you're doing and check your oral rest posture for 30 seconds: lips sealed? tongue on palate? teeth apart? breathing through nose? Correct any issues and continue your day. Log how many checks you got right.",
          instructionsSe: "Ställ in 5 slumpmässiga larm på telefonen under dagen. När varje larm ringer, stanna det du gör och kontrollera din oral viloposition i 30 sekunder: läpparna förslutna? tungan på gommen? tänderna isär? andas genom näsan? Korrigera eventuella problem och fortsätt din dag. Logga hur många kontroller du fick rätt.",
          setsPerDay: 2,
          tipEn: "The goal is to catch yourself mouth-breathing or with low tongue posture during normal daily activities — and correct it instantly.",
          tipSe: "Målet är att fånga dig själv munandande eller med låg tungposition under normala dagliga aktiviteter — och korrigera omedelbart."
        },
        {
          id: "8-4", type: "timed", duration: 120, icon: "🪞",
          titleEn: "Mirror Self-Assessment",
          titleSe: "Spegel-självbedömning",
          instructionsEn: "Stand in front of a mirror for 2 minutes. Check: 1) Where is your tongue at rest? 2) Are your lips sealed? 3) Can you see the mentalis muscle (chin muscle) straining? 4) When you swallow, does your tongue push forward? Note everything you observe in your session notes.",
          instructionsSe: "Stå framför en spegel i 2 minuter. Kontrollera: 1) Var är tungan i vila? 2) Är läpparna förslutna? 3) Ser du mentalismuskeln (hakmuskeln) ansträngd? 4) När du sväljer, trycker tungan framåt? Notera allt du observerar i dina sessionsanteckningar.",
          setsPerDay: 2,
          tipEn: "The chin muscle (mentalis) should be soft at rest. If you see it dimpling or straining, you may be using it to close your lips instead of the orbicularis oris.",
          tipSe: "Hakmuskeln (mentalis) ska vara mjuk i vila. Om du ser den dimpla eller ansträngas, kanske du använder den för att stänga läpparna istället för orbicularis oris."
        },
        {
          id: "8-5", type: "timed", duration: 60, icon: "😴",
          titleEn: "Sleep Position Practice",
          titleSe: "Sömnlägesövning",
          instructionsEn: "Lie in your normal sleeping position. Practice the correct rest posture: lips sealed, tongue on palate, teeth slightly apart, breathing through nose. Hold this for 60 seconds while relaxing. Notice if your mouth wants to fall open. This is the position you should fall asleep in.",
          instructionsSe: "Ligg i din vanliga sovposition. Öva korrekt viloposition: läpparna förslutna, tungan på gommen, tänderna lite isär, andas genom näsan. Håll detta i 60 sekunder medan du slappnar av. Märk om munnen vill falla öppen. Detta är positionen du bör somna i.",
          setsPerDay: 2,
          tipEn: "If your mouth opens when you relax, try a small piece of micropore tape across your lips (with your therapist's approval) to train nighttime lip seal.",
          tipSe: "Om munnen öppnas när du slappnar av, prova en liten bit micropore-tejp över läpparna (med terapeutens godkännande) för att träna nattlig läppförslutning."
        }
      ]
    },
    {
      id: 9, phaseId: "integration",
      titleEn: "Week 9: Habituation & Self-Monitoring",
      titleSe: "Vecka 9: Invänjning & Självövervakning",
      descEn: "By now, exercises should feel more natural. This week focuses on building habits that last and self-monitoring your progress.",
      descSe: "Vid det här laget bör övningarna kännas mer naturliga. Denna vecka fokuserar på att bygga bestående vanor och självövervaka dina framsteg.",
      exercises: [
        {
          id: "9-1", type: "timed", duration: 120, icon: "📊",
          titleEn: "Habit Tracking Review",
          titleSe: "Vaneuppföljning",
          instructionsEn: "Spend 2 minutes reviewing your week. Which exercises felt easy? Which still need work? Are you catching yourself mouth-breathing less often? Write detailed notes about your progress in the Notes section. Rate your overall effort this week from 1-5.",
          instructionsSe: "Spend 2 minuter på att granska din vecka. Vilka övningar kändes lätta? Vilka behöver fortfarande arbete? Får dunga dig själv munandande mindre ofta? Skriv detaljerade anteckningar om dina framsteg i Anteckningar-sektionen. Betygsätt din totala ansträngning denna vecka från 1-5.",
          setsPerDay: 2,
          tipEn: "Self-monitoring is strongly linked to better outcomes in therapy. Honest notes help your therapist adjust your programme.",
          tipSe: "Självövervakning är starkt kopplat till bättre resultat i terapi. Ärliga anteckningar hjälper din terapeut att justera ditt program."
        },
        {
          id: "9-2", type: "hold", holdSeconds: 15, icon: "💪",
          titleEn: "Advanced Tongue Workout",
          titleSe: "Avancerad Tungträning",
          instructionsEn: "Extended tongue strengthening at higher intensity: Tongue push-up (15s hold, 15 reps), Palatal press posterior (15s hold, 15 reps), Tongue force up and down (15s hold each, 10 reps each direction). This is your most demanding tongue workout — give it full effort.",
          instructionsSe: "Utökad tungstyrketräning med högre intensitet: Tungans uppptryck (15s håll, 15 reps), Gomtryck posterior (15s håll, 15 reps), Tungkraft upp och ner (15s håll varje, 10 reps varje riktning). Detta är din mest krävande tungträning — ge den full ansträngning.",
          setsPerDay: 2,
          tipEn: "By now you should feel noticeably stronger tongue muscles. If 15 seconds feels easy, you're doing great.",
          tipSe: "Nu bör du märka märkbart starkare tungmuskler. Om 15 sekunder känns lätt gör du det bra."
        },
        {
          id: "9-3", type: "timed", duration: 300, icon: "🫁",
          titleEn: "Nasal Breathing Challenge",
          titleSe: "Näsandningsutmaning",
          instructionsEn: "5 minutes of continuous nasal breathing with full body awareness. Sit or lie comfortably. Maintain lip seal, tongue on palate, teeth apart. Breathe naturally through your nose. Every 30 seconds, do a quick posture check. If your mind wanders, gently bring it back to your breathing.",
          instructionsSe: "5 minuter kontinuerlig näsandning med full kroppsuppmärksamhet. Sitt eller ligg bekvämt. Bibehåll läppförslut, tungan på gommen, tänderna isär. Andas naturligt genom näsan. Var 30:e sekund, gör en snabb attitydkontroll. Om tankarna vandrar, för dem försiktigt tillbaka till andningen.",
          setsPerDay: 2,
          tipEn: "This is essentially a meditation exercise focused on nasal breathing. It trains both body awareness and airway habits.",
          tipSe: "Detta är i princip en meditationsövning fokuserad på näsandning. Den tränar både kroppsuppmärksamhet och luftvägs vanor."
        },
        {
          id: "9-4", type: "hold", holdSeconds: 60, icon: "👄",
          titleEn: "Lip Seal Endurance",
          titleSe: "Läppförslutningsuthållighet",
          instructionsEn: "Hold a perfect lip seal for 60 seconds while doing normal activities (reading, watching TV, working). Your lips should be sealed but relaxed — no tension. Teeth slightly apart, tongue on palate, breathing through nose. 3 rounds of 60 seconds.",
          instructionsSe: "Håll ett perfekt läppförslut i 60 sekunder medan du gör normala aktiviteter (läser, ser på TV, arbetar). Läpparna ska vara förslutna men avslappnade — ingen spänning. Tänderna lite isär, tungan på gommen, andas genom näsan. 3 rundor av 60 sekunder.",
          setsPerDay: 2,
          tipEn: "If your lips feel tired, that's normal — the endurance will build quickly over this week.",
          tipSe: "Om läpparna känns trötta är det normalt — uthålligheten kommer att byggas snabbt under denna vecka."
        },
        {
          id: "9-5", type: "timed", duration: 120, icon: "🔄",
          titleEn: "Self-Correction Practice",
          titleSe: "Självkorrektionsövning",
          instructionsEn: "For 2 minutes, deliberately open your mouth and let your tongue drop from the palate. Then immediately close your lips, place tongue on palate, and resume nasal breathing. Repeat this open-close cycle every 10-15 seconds. The goal is to train instant self-correction when you catch yourself in bad posture.",
          instructionsSe: "I 2 minuter, öppna medvetet munnen och låt tungan släppa från gommen. Stäng sedan omedelbart läpparna, placera tungan på gommen och återuppta näsandning. Upprepa denna öppna-stäng-cykel var 10-15:e sekund. Målet är att träna omedelbar självkorrektion när du fångar dig själv i fel position.",
          setsPerDay: 2,
          tipEn: "The faster you can catch and correct bad posture, the less time your muscles spend in dysfunctional patterns.",
          tipSe: "Ju snabbare du kan upptäcka och korrigera fel position, desto mindre tid spenderar musklerna i dysfunktionella mönster."
        }
      ]
    },
    {
      id: 10, phaseId: "maintenance",
      titleEn: "Week 10: Full Routine Consolidation",
      titleSe: "Vecka 10: Komplett Rutinkonsolidering",
      descEn: "Congratulations — you've reached the final week! This week consolidates everything into a sustainable daily routine you can continue for life.",
      descSe: "Grattis — du har nått sista veckan! Denna vecka konsoliderar allt i en hållbar daglig rutin du kan fortsätta med resten av livet.",
      exercises: [
        {
          id: "10-1", type: "timed", duration: 300, icon: "☀️",
          titleEn: "Complete Morning Routine",
          titleSe: "Komplett Morgonrutin",
          instructionsEn: "Your full 5-minute morning routine to start every day: 1 min nasal breathing (4-7-8), 10x tongue-to-palate hold (10s), 10x tongue push-up (10s), 10x lip stretch, 10x cheek push each side, 1 min gum chewing with humming. This becomes your lifelong daily morning practice.",
          instructionsSe: "Din fulla 5-minuters morgonrutin för att starta varje dag: 1 min näsandning (4-7-8), 10x tunga-mot-gommen (10s), 10x tungans uppptryck (10s), 10x läppsträckning, 10x kindtryck varje sida, 1 min tuggummimimik med hummande. Detta blir din livslånga dagliga morgonpraktik.",
          setsPerDay: 2,
          tipEn: "The morning routine primes your muscles for the day. Just like brushing your teeth, it should become automatic.",
          tipSe: "Morgonrutinen förbereder musklerna för dagen. Precis som att borsta tänderna bör det bli automatiskt."
        },
        {
          id: "10-2", type: "timed", duration: 300, icon: "🌙",
          titleEn: "Complete Evening Routine",
          titleSe: "Komplett Kvällsrutin",
          instructionsEn: "Your full 5-minute evening routine before bed: 1 min 4-7-8 nasal breathing, 10x tongue-to-palate hold (10s), 10x palatal press posterior, 1 min gum chewing, rest posture check in sleeping position (60s). This prepares your airway for sleep and should be the last thing you do before sleeping.",
          instructionsSe: "Din fulla 5-minuters kvällsrutin innan sängdags: 1 min 4-7-8 näsandning, 10x tunga-mot-gommen (10s), 10x gomtryck posterior, 1 min tuggummimimik, vilopositionskontroll i sovposition (60s). Detta förbereder luftvägarna för sömn och bör vara det sista du gör innan du sover.",
          setsPerDay: 2,
          tipEn: "The evening routine is especially important for sleep apnea patients. Consistency here directly impacts sleep quality.",
          tipSe: "Kvällsrutinen är särskilt viktig för sömnapnepatienter. Konsekvens här påverkar sömnkvaliteten direkt."
        },
        {
          id: "10-3", type: "timed", duration: 300, icon: "🏋️",
          titleEn: "Full Exercise Flow",
          titleSe: "Full Övningsflöde",
          instructionsEn: "One complete flow through all key exercises: Start with breathing, then tongue exercises, then lip exercises, then swallow practice. Move smoothly between each with minimal rest. This is your comprehensive session — do it at least once this week to prove to yourself how far you've come.",
          instructionsSe: "Ett komplett flöde genom alla nyckelövningar: Börja med andning, sedan tungövningar, sedan läppövningar, sedan sväljträning. Flyta smidigt mellan varje med minimal vila. Detta är din kompletta session — gör den minst en gång denna vecka för att bevisa för dig själv hur långt du har kommit.",
          setsPerDay: 2,
          tipEn: "Compare how this feels to your first attempts in Week 1. Most patients notice dramatic improvements in tongue strength and awareness.",
          tipSe: "Jämför hur detta känns med dina första försök i vecka 1. De flesta patienter märker dramatiska förbättringar i tungstyrka och medvetenhet."
        },
        {
          id: "10-4", type: "timed", duration: 180, icon: "✅",
          titleEn: "Final Self-Assessment",
          titleSe: "Slutgiltig Självbedömning",
          instructionsEn: "Compare your abilities now to Week 1. Check in the mirror: tongue position at rest, lip seal quality, swallow pattern. Rate your improvement in each area. Write detailed notes about your journey — what was hardest, what clicked first, what advice you'd give to someone starting the programme.",
          instructionsSe: "Jämför dina förmågor nu med vecka 1. Kontrollera i spegeln: tungposition i vila, läppförslutningskvalitet, sväljmönster. Betygsätt din förbättring i varje område. Skriv detaljerade anteckningar om din resa — vad var svårast, vad klickade först, vilket råd du skulle ge någon som startar programmet.",
          setsPerDay: 2,
          tipEn: "This assessment is valuable for your therapist. Bring your notes to your follow-up appointment.",
          tipSe: "Denna bedömning är värdefull för din terapeut. Ta med dina anteckningar till uppföljningsbesöket."
        },
        {
          id: "10-5", type: "timed", duration: 120, icon: "📝",
          titleEn: "Maintenance Plan Review",
          titleSe: "Underhållsplan Granskning",
          instructionsEn: "Review your ongoing maintenance plan. From now on, your minimum daily routine is: morning routine (5 min) + evening routine (5 min) + posture checks throughout the day. That's 10-15 minutes daily to maintain everything you've built. Commit to this schedule and note it in your session notes.",
          instructionsSe: "Granska ditt fortsatta underhållsprogram. Från och med nu är ditt minimum dagliga rutin: morgonrutin (5 min) + kvällsrutin (5 min) + attitydkontroller under dagen. Det är 10-15 minuter dagligen för att bibehålla allt du byggt. Förbind dig till detta schema och notera det i dina sessionsanteckningar.",
          setsPerDay: 2,
          tipEn: "Maintenance is for life. Just like dental hygiene or physical fitness, myofunctional habits need ongoing attention. But the good news: the 10-minute routine becomes effortless with practice.",
          tipSe: "Underhåll är för livet. Precis som tandvård eller fysisk träning behöver myofunktionella vanor kontinuerlig uppmärksamhet. Men det goda: 10-minutersrutinen blir ansträngningslös med träning."
        }
      ]
    }
  ]
};

window.THERAPY_DATA = THERAPY_DATA;


<script>
  import Layer from "./Layer.svelte";
  import Band from "./Band.svelte";
  import GitHubButton from "./GitHubButton.svelte";

  const layers = [
    {
      title: "Surface Waters",
      description: "Gateway to the depths",
      bands: [
        {
          type: "bandcamp",
          embedUrl:
            "https://bandcamp.com/EmbeddedPlayer/album=2596157761/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/track=814129051/transparent=true",
          title: "House of the Black Geminus - Akhlys",
        },
        {
          type: "bandcamp",
          embedUrl: "https://bandcamp.com/EmbeddedPlayer/album=1362890488/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/track=1341480427/transparent=true/",
          title: "Lowgazers - Plebeian Grandstand"
        },
        {
          type: "bandcamp",
          embedUrl:
            "https://bandcamp.com/EmbeddedPlayer/album=3354084468/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/track=1752248217/transparent=true",
          title: "Serial Urbicide - Extermination Dismemberment",
        },
        {
          type: "bandcamp",
          embedUrl: "https://bandcamp.com/EmbeddedPlayer/album=40623812/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/track=2517576029/transparent=true",
          title: "Silence - RORCAL"
        },
        {
          type: "bandcamp",
          embedUrl:
            "https://bandcamp.com/EmbeddedPlayer/album=1320490252/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/track=1744996731/transparent=true",
          title: "INDWELL - Methwitch",
        },
        {
          type: "bandcamp",
          embedUrl: "https://bandcamp.com/EmbeddedPlayer/album=63441355/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/track=1107287539/transparent=true",
          title: "Through the Mirror - Endon"
        }
      ],
    },
    {
      title: "Twilight Zone",
      description: "Light begins to fade",
      bands: [
        {
          type: "bandcamp",
          embedUrl: "https://bandcamp.com/EmbeddedPlayer/album=2795708310/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/track=3622130824/transparent=true",
          title: "The Codex Necro - Anaal Nathrakh"
        },
        {
          type: "soundcloud",
          embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/508135677&color=%23333333&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false",
          title: "Preaching For Mass Suicide - Damaar"
        },
        {
          type: "bandcamp",
          embedUrl:
            "https://bandcamp.com/EmbeddedPlayer/album=4269738797/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/track=2527554322/transparent=true",
          title: "Eternal Flesh Ripping Chaos - BESTIAL PUTREFACTION",
        },
        {
          type: "bandcamp",
          embedUrl:
            "https://bandcamp.com/EmbeddedPlayer/album=335410990/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/track=1959712987/transparent=true",
          title:
            "The Doorway - Adventures in the Death State Boundary by Vessel Of Iniquity",
        },
        {
          type: "bandcamp",
          embedUrl:
            "https://bandcamp.com/EmbeddedPlayer/album=2521025399/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/track=2752009065/transparent=true",
          title: "Stow - PORTAL",
        },
        {
          type: "bandcamp",
          embedUrl: "https://bandcamp.com/EmbeddedPlayer/album=3277962768/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/track=3860944420/transparent=true",
          title: "The Baneful Choir - Teitanblood"
        }
      ],
    },
    {
      title: "Midnight Zone",
      description: "Darkness takes hold",
      bands: [
        {
          type: "bandcamp",
          embedUrl: "https://bandcamp.com/EmbeddedPlayer/album=431629956/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/track=2311589613/transparent=true",
          title: "Pain/Ter - K.F.R"
        },
        {
          type: "bandcamp",
          embedUrl:
            "https://bandcamp.com/EmbeddedPlayer/album=4270580890/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/track=1117006975/transparent=true",
          title: "Enhanced Audial Terrorism - Febris Manea",
        },
        {
          type: "bandcamp",
          embedUrl:
            "https://bandcamp.com/EmbeddedPlayer/album=2722518219/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/track=2706870416/transparent=true",
          title: "Cannibal Coronal Mass Ejections - Jyotisavedanga",
        },
        {
          type: "bandcamp",
          embedUrl:
            "https://bandcamp.com/EmbeddedPlayer/album=2057901946/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/track=11829854/transparent=true",
          title: "Jacob&#39;s Ladder - Hell Militia",
        },
        {
          type: "bandcamp",
          embedUrl:
            "https://bandcamp.com/EmbeddedPlayer/album=4060129622/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/track=2334899399/transparent=true",
          title: "Hiss - Wormrot",
        },
        {
          type: "bandcamp",
          embedUrl:
            "https://bandcamp.com/EmbeddedPlayer/album=3303220371/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/track=815946258/transparent=true",
          title: "Death, Pierce Me - Silencer",
        },
        {
          type: "bandcamp",
          embedUrl:
            "https://bandcamp.com/EmbeddedPlayer/album=1580834044/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/track=282267191/transparent=true",
          title: "Rectum Grinder - INTESTINAL DISGORGE",
        },
        {
          type: "soundcloud",
          embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1663057146&color=%23270c13&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false",
          title: "Unholy Liquid - Effluence"
        }
      ],
    },
    {
      title: "Abyssal Plain",
      description: "Beyond the reach of light",
      bands: [
        {
          type: "bandcamp",
          embedUrl: "https://bandcamp.com/EmbeddedPlayer/album=1401043708/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/track=245687838/transparent=true",
          title: "PUTREFACTION IN PROGRESS - LAST DAYS OF HUMANITY"
        },
        {
          type: "bandcamp",
          embedUrl:
            "https://bandcamp.com/EmbeddedPlayer/album=1194998195/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/track=3418300228/transparent=true",
          title: "Black Void Ov Heaven - Drohtnung",
        },
        {
          type: "bandcamp",
          embedUrl:
            "https://bandcamp.com/EmbeddedPlayer/album=3519719860/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/track=477222344/transparent=true",
          title: "Featureless Thermal Equilibrium - Sissy Spacek",
        },
        {
          type: "bandcamp",
          embedUrl:
            "https://bandcamp.com/EmbeddedPlayer/album=3440570094/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/track=2544692568/transparent=true",
          title: "Eschatological Scatology - GNAW THEIR TONGUES",
        },
        {
          type: "bandcamp",
          embedUrl:
            "https://bandcamp.com/EmbeddedPlayer/album=3805071938/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/track=4260168030/transparent=true",
          title: "A.G.B.B.A.U. - NYGTHBLSZ",
        },
        {
          type: "bandcamp",
          embedUrl: "https://bandcamp.com/EmbeddedPlayer/album=3899474641/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/track=2656124149/transparent=true",
          title: "Death Monolith - SUBDUER"
        },
        {
          type: "soundcloud",
          embedUrl:
            "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1788870874&color=%23333333&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
          title: "Ruin - Endless Dismal Moan",
        },
        {
          type: "bandcamp",
          embedUrl: "https://bandcamp.com/EmbeddedPlayer/album=2947460408/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/track=1775346782/transparent=true",
          title: "Abhabaniyastral Samsarimplication - BRAHMASTRIKA"
        }
      ],
    },
    {
      title: "Hadal Zone",
      description: "The crushing depths",
      bands: [
        {
          type: "bandcamp",
          embedUrl: "https://bandcamp.com/EmbeddedPlayer/album=431562691/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/track=2465782309/transparent=true",
          title: "Venereology - Merzbow"
        },
        {
          type: "soundcloud",
          embedUrl:
            "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1474984045&color=%23270c13&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false",
          title: "The Pain of Bleeding - Emit",
        },
        {
          type: "bandcamp",
          embedUrl:
            "https://bandcamp.com/EmbeddedPlayer/album=2081787140/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/track=3257348911/transparent=true",
          title:
            "Typhonian Wormholes: Indecipherable Anti-Structural Formulæ - Tetragrammacide",
        },
      ],
    },
  ];
</script>

<main class="prose min-h-screen p-4 bg-gradient-to-b from-brand-blue to-black max-w-none">
  <div class="flex flex-col gap-16 max-w-7xl mx-auto px-4">

    <GitHubButton
    repoUrl="https://github.com/codingconcepts/bottom-of-the-iceberg"
    buttonText="Contribute"
    />
    
    <header>
      <h1 class="font-display m-0">Bottom of the Iceberg</h1>
      <p class='m-0'>A descent into the depths of extreme metal</p>
    </header>
    
    <section class="flex flex-col gap-16 w-full">
      {#each layers as layer}
      <Layer {...layer}>
        <div class='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {#each layer.bands as band}
          <Band {...band} />
          {/each}
        </div>
      </Layer>
      {/each}
    </section>
    
  </div>
</main>


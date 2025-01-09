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
          embedUrl: "https://bandcamp.com/EmbeddedPlayer/album=2795708310/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/track=3622130824/transparent=true",
          title: "The Codex Necro - Anaal Nathrakh"
        },
        {
          type: "bandcamp",
          embedUrl:
            "https://bandcamp.com/EmbeddedPlayer/album=2596157761/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/track=814129051/transparent=true",
          title: "House of the Black Geminus - Akhlys",
        },
        {
          type: "bandcamp",
          embedUrl:
            "https://bandcamp.com/EmbeddedPlayer/album=3354084468/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/track=1752248217/transparent=true",
          title: "Serial Urbicide - Extermination Dismemberment",
        },
        {
          type: "bandcamp",
          embedUrl:
            "https://bandcamp.com/EmbeddedPlayer/album=1320490252/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/track=1744996731/transparent=true",
          title: "INDWELL - Methwitch",
        },
      ],
    },
    {
      title: "Twilight Zone",
      description: "Light begins to fade",
      bands: [
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

<main>
  <GitHubButton
    repoUrl="https://github.com/codingconcepts/bottom-of-the-iceberg"
    buttonText="Contribute"
  />

  <header>
    <div class="metal-text">Bottom of the Iceberg</div>
    <p>A descent into the depths of extreme metal</p>
  </header>

  {#each layers as layer}
    <Layer {...layer}>
      <div class="band-row">
        {#each layer.bands as band}
          <Band {...band} />
        {/each}
      </div>
    </Layer>
  {/each}
</main>

<style>
  main {
    min-height: 100vh;
    background: linear-gradient(180deg, #4e70f5 0%, #000000 100%);
    padding: 2rem;
  }

  header {
    text-align: center;
    color: #fff;
    margin-bottom: 4rem;
    padding: 2rem;
    border-radius: 8px;
  }

  h1 {
    font-size: 3.5rem;
    margin: 0;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }

  header p {
    font-size: 1.2rem;
    margin: 1rem 0 0;
    opacity: 0.8;
  }

  .band-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    max-width: 80%;
    margin: 0 auto;
  }

  .metal-text {
    font-size: 3.5rem;
    font-family: "Metal Mania", cursive;
    color: #fff;
    text-align: center;
    margin: 0;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
</style>

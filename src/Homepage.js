import wikiLogo from "./images/wiki-globe.png";
import googleplay from "./images/footer/google_play.png";
import appstore from "./images/footer/app-store.png";
import wiki_w from "./images/footer/wiki-w.png";
import wiki_media from "./images/footer/wikimedia-found.png";
import commons from "./images/other-wikis/commons.png";
import mediawiki from "./images/other-wikis/mediawiki.png";
import metawiki from "./images/other-wikis/metawiki.png";
import wikibooks from "./images/other-wikis/wikibooks.png";
import wikivoyage from "./images/other-wikis/wikivoyage.png";
import wiktionary from "./images/other-wikis/wiktionary.png";
import wikidata from "./images/other-wikis/wikidata.png";
import wikinews from "./images/other-wikis/wikinews.png";
import wikiquote from "./images/other-wikis/wikiquote.png";
import wikisource from "./images/other-wikis/wikisource.png";
import wikispecies from "./images/other-wikis/wikispecies.png";
import wikiversity from "./images/other-wikis/wikiversity.png";
import { Divider, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useLayoutEffect, useState } from "react";
import TagCloud from "TagCloud";

export default function Homepage() {
  const langList = [
    {
      lang: "English",
      articles: "6 585 000+ articles",
      langCode: "en",
      langTitle: "English",
    },
    {
      lang: "Русский",
      articles: "1 874 000+ статей",
      langCode: "ru",
      langTitle: "Русский",
    },
    {
      lang: "Deutsch",
      articles: "2 749 000+ Artikel",
      langCode: "de",
      langTitle: "Deutsch",
    },
    {
      lang: "Italiano",
      articles: "1 785 000+ voci",
      langCode: "it",
      langTitle: "Italiano",
    },
    {
      lang: "فارسی",
      articles: "مقاله 000 940+",
      langCode: "fa",
      langTitle: "فارسی",
    },
    {
      lang: "日本語",
      articles: "1 353 000+ 記事",
      langCode: "ja",
      langTitle: "日本語",
    },
    {
      lang: "Français",
      articles: "2 476 000+ articles",
      langCode: "fr",
      langTitle: "Français",
    },
    {
      lang: "Español",
      articles: "1 822 000+ artículos",
      langCode: "es",
      langTitle: "Español",
    },
    {
      lang: "中文",
      articles: "1 322 000+ 条目 / 條目",
      langCode: "zh",
      langTitle: "中文",
    },
    {
      lang: "Português",
      articles: "1 096 000+ artigos",
      langCode: "pt",
      langTitle: "Português",
    },
  ];
  const megalanglist = [
    "Polski",
    "العربية",
    "Deutsch",
    "English",
    "Español",
    "Français",
  ];

  const myTags = [

    "English 6 629 000+ articles",
    "Русский 1 900 000+ статей",
    "Español 1 846 000+ artículos",
    "日本語 1 366 000+ 記事",
    "Deutsch 2 781 000+ Artikel",
    "Français 2 504 000+ articles",
    "Italiano 1 801 000+ voci",
    "中文 1 340 000+ 条目 / 條目",
    "Português 1 102 000+ artigos",
    "العربية 1 202 000+",
  ];

  useLayoutEffect(() => {
    var tagCloud = TagCloud(".content", myTags, {
      // radius in px
      radius: 280,

      // animation speed
      // slow, normal, fast
      maxSpeed: "fast",
      initSpeed: "fast",

      // 0 = top
      // 90 = left
      // 135 = right-bottom
      direction: 135,

      // interact with cursor move on mouse out
      keep: true,
    });
    document.querySelector(".content").style.color = "#3366CC";

  }, []);

  const [dark, setdark] = useState(false);

  return (
    <body>
      <Box sx={{ position: "absolute", top: "15vh", left: "30vw" }}>
        <Box sx={{ height: "600px ", overflow: "hidden" ,width:'600px'}}>
          <span class="content" />
        </Box>
      </Box>
      <Box
        sx={{
          height: "100vh",
          bgcolor: dark ? "black" : "white",
          color: dark ? "white" : "black",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "0",
            right: "0",
            p: "5vh",
            color: "#212121",
          }}
        >
          <div className="light-dark-toggle">
            <Box sx={{ color: dark ? "white" : "black" }}>day/night</Box>
            <label class="switch">
              <input
                type="checkbox"
                checked={dark}
                onChange={() => {
                  setdark(!dark);
                }}
              />
              <span class="slider round"></span>
            </label>
          </div>
        </Box>
        <Box sx={{ height: "25vh", display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                mt: "2vh",
                fontWeight: "900",
                fontSize: "7vh",
                height: "9vh",
                textDecoration: "underline",
              }}
            >
              WIKIPEDIA
            </Box>
            <Box sx={{ fontSize: "3vh", textAlign: "center" }}>
              The Free Encyclopedia
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              border: 1,
              borderColor: "#3366CC",
              borderRadius: "50%",
              p: "5vh",
            }}
          >
            <Box as="img" src={wikiLogo} height="35vh" />
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: "10vh" }}>
          <TextField
            id="standard-basic"
            label="Search Wikipedia"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            inputProps={{
              disableUnderline: true,
              style: { fontSize: "8vh" },
            }} //
            InputLabelProps={{
              disableUnderline: true,
              style: {
                fontSize: "10vh",
                color: dark ? "white" : "#00000033",
                disableUnderline: true,
              },
            }}
          />
          <SearchIcon sx={{ height: "15vh", width: "10vh" }} />
        </Box>
      </Box>
      <Footermainpage
        wiki_media={wiki_media}
        wiki_w={wiki_w}
        googleplay={googleplay}
        appstore={appstore}
        commons={commons}
        wikivoyage={wikivoyage}
        wiktionary={wiktionary}
        wikibooks={wikibooks}
        wikinews={wikinews}
        wikidata={wikidata}
        wikiversity={wikiversity}
        wikiquote={wikiquote}
        mediawiki={mediawiki}
        wikisource={wikisource}
        wikispecies={wikispecies}
        metawiki={metawiki}
      />
    </body>
  );
}

function Footermainpage({
  wiki_media,
  wiki_w,
  googleplay,
  appstore,
  commons,
  wikivoyage,
  wiktionary,
  wikibooks,
  wikinews,
  wikidata,
  wikiversity,
  wikiquote,
  mediawiki,
  wikisource,
  wikispecies,
  metawiki,
}) {
  return (
    <footer>
      <div id="link-box">
        <div id="wiki-found">
          <div class="wiki-found-img-cont">
            <img className="img14" src={wiki_media} />
          </div>
          <div class="wiki-found-text-cont">
            Wikipedia is hosted by the Wikimedia Foundation, a non-profit
            organization that also hosts a range of other projects.
            <br />
            <a href="#">You can support our work with a donation</a>
          </div>
        </div>
        <div id="wiki-download">
          <div class="download-img-cont">
            <img className="img13" src={wiki_w} />
          </div>
          <div class="download-text-cont">
            <div id="download-heading">
              Download Wikipedia for Android or iOS
            </div>
            <div id="download-body">
              Save your favorite articles to read offline, sync your reading
              lists across devices and customize your reading experience with
              the official Wikipedia app.
            </div>
            <div id="download-btn-cont">
              <img className="image" src={googleplay} />
              {/* <img src='/images/footer/app-store.png' /> */}
            </div>
            <div id="download-btn-cont">
              <img className="image" src={appstore} />
            </div>
          </div>
        </div>

        <div id="wiki-apps">
          <div class="app-cont">
            <img className="img4" src={commons} />
            <div class="app-info">
              <div class="app-name">Commons</div>
              <div class="app-desc">Freely usable photos & more</div>
            </div>
          </div>

          <div class="app-cont">
            <img className="img5" src={wikivoyage} />
            <div class="app-info">
              <div class="app-name">Wikivoyage</div>
              <div class="app-desc">Free travel guide</div>
            </div>
          </div>

          <div class="app-cont">
            <img className="img6" src={wiktionary} />
            <div class="app-info">
              <div class="app-name">Wiktionary</div>
              <div class="app-desc">Free Dictionary</div>
            </div>
          </div>

          <div class="app-cont">
            <img className="img2" src={wikibooks} />
            <div class="app-info">
              <div class="app-name">Wikibooks</div>
              <div class="app-desc">Free textbooks</div>
            </div>
          </div>

          <div class="app-cont">
            <img className="img1" src={wikinews} />
            <div class="app-info">
              <div class="app-name">Wikinews</div>
              <div class="app-desc">Free news source</div>
            </div>
          </div>

          <div class="app-cont">
            <img className="img3" src={wikidata} />
            <div class="app-info">
              <div class="app-name">Wikidata</div>
              <div class="app-desc">Free knowledge base</div>
            </div>
          </div>

          <div class="app-cont">
            <img className="img7" src={wikiversity} />
            <div class="app-info">
              <div class="app-name">Wikiversity</div>
              <div class="app-desc">Free course materials</div>
            </div>
          </div>

          <div class="app-cont">
            <img className="img8" src={wikiquote} />
            <div class="app-info">
              <div class="app-name">Wikiquote</div>
              <div class="app-desc">Free quote compendium</div>
            </div>
          </div>

          <div class="app-cont">
            <img className="img9" src={mediawiki} />
            <div class="app-info">
              <div class="app-name">MediaWiki</div>
              <div class="app-desc">Free & open wiki application</div>
            </div>
          </div>

          <div class="app-cont">
            <img className="img10" src={wikisource} />
            <div class="app-info">
              <div class="app-name">Wikisource</div>
              <div class="app-desc">Free library</div>
            </div>
          </div>

          <div class="app-cont">
            <img className="img11" src={wikispecies} />
            <div class="app-info">
              <div class="app-name">Wikispecies</div>
              <div class="app-desc">Free species directory</div>
            </div>
          </div>

          <div class="app-cont">
            <img className="img12" src={metawiki} />
            <div class="app-info">
              <div class="app-name">Meta-wiki</div>
              <div class="app-desc">
                Community coordination and documentation
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="terms-box">
        This page is available under the{" "}
        <a href="#">Creative Commons Attribution-ShareAlike License</a> •{" "}
        <a href="#">Terms of Use</a> • <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
}

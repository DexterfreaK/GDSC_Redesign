import hamburgerIcon from "./images/hamburger-menu-icon.svg";
import wikiGlobe from "./images/wiki-globe.png";
import "./BITSPilani.css";
import { Divider, Box } from "@mui/material";
import { useState } from "react";

export default function BITSPilani() {
  const [dark, setdark] = useState(false);
  return (
    <Box
      sx={{
        bgcolor: dark ? "#212121" : "white",
        color: dark ? "white" : "black",
      }}
    >
      <main className="main">
        <section className="header">
          <div className="top-header">
            <img src={hamburgerIcon} width="23.8" />
            <header>
              <div class="header-img-cont">
                <img src={wikiGlobe} width="30" />
              </div>
              <div id="title-container">
                <div id="main-heading">
                  W<span>IKIPEDI</span>A
                </div>
                <div id="sub-heading">The Free Encyclopedia</div>
              </div>
            </header>
            <div
              className="input-group mb-0"
              style={{ width: "40vw", marginLeft: "auto", marginRight: "auto" }}
            >
              <div className="input-group-prepend">
                <span
                  className="input-group-text"
                  id="basic-addon1"
                  style={{
                    height: "3rem",
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Search Wikipedia"
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
            </div>
            <button type="button" class="btn btn-primary">
              Create Account
            </button>
            <button type="button" class="btn btn-outline-primary">
              Log In
            </button>
          </div>
          <Box
            sx={{
              bgcolor: dark ? "#212121" : "white",
              color: dark ? "white" : "black",
            }}
          >
            <div className="bottom-header d-flex">
              <Box sx={{ width: "25vw" }} />
              <h2 className="font-weight-bold">
                Birla Institute of Technology and Science, Pilani
              </h2>
              <Box
                sx={{
                  width: "25vw",
                  display: "flex",
                  justifyContent: "flex-end",
                  color: "#212121",
                }}
              >
                <div className="light-dark-toggle">
                  day/night
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
            </div>
          </Box>
        </section>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            sx={{
              width: "17vw",
              borderRight: 1,
              borderColor: "#EAECF0",
            }}
          >
            <Box sx={{ m: "2vh", fontWeight: "600" }}>Contents</Box>
            <Divider />
            <Box sx={{ color: "#3366CC80" }}>
              <Box>
                <Box sx={{ p: "3vh", fontWeight: "600" }}>Campuses</Box>
              </Box>
              <Box>
                <Box sx={{ p: "3vh", fontWeight: "600" }}>Academics</Box>
              </Box>
              <Box>
                <Box sx={{ p: "3vh", fontWeight: "600" }}>Student Life</Box>
              </Box>
              <Box>
                <Box sx={{ p: "3vh", fontWeight: "600" }}>Alumni</Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: "60vw",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: "2vh",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Box sx={{ m: "2vh" }}>Article</Box>
                <Box sx={{ m: "2vh" }}>Talk</Box>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Box sx={{ m: "2vh" }}>Read</Box>
                <Box sx={{ m: "2vh" }}>Edit</Box>
                <Box sx={{ m: "2vh" }}>View History</Box>
              </Box>
            </Box>
            <Divider />

            <Box>
              <Box sx={{ m: "3vh" }}>
                <Box sx={{ fontWeight: "600", fontSize: "24px" }}>Article</Box>
                <Box sx={{ fontFamily: "arial" }}>
                  Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Praesent auctor purus luctus
                  enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                  ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
                  bibendum lorem. Morbi convallis convallis diam sit amet
                  lacinia. Aliquam in elementum tellus. Curabitur tempor quis
                  eros tempus lacinia. Nam bibendum pellentesque quam a
                  convallis. Sed ut vulputate nisi. Integer in felis sed leo
                  vestibulum venenatis. Suspendisse quis arcu sem. Aenean
                  feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna.
                  Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
                  Mauris sit amet magna non ligula vestibulum eleifend. Nulla
                  varius volutpat turpis sed lacinia. Nam eget mi in purus
                  lobortis eleifend. Sed nec ante dictum sem condimentum
                  ullamcorper quis venenatis nisi. Proin vitae facilisis nisi,
                  ac posuere leo. Jorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Etiam eu turpis molestie, dictum est a,
                  mattis tellus. Sed dignissim, metus nec fringilla accumsan,
                  risus sem sollicitudin lacus, ut interdum tellus elit sed
                  risus. Maecenas eget condimentum velit, sit amet feugiat
                  lectus. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos. Praesent auctor purus
                  luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
                  rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna.
                  Curabitur vel bibendum lorem. Morbi convallis convallis diam
                  sit amet lacinia. Aliquam in elementum tellus.
                </Box>
              </Box>
              <Box sx={{ m: "3vh" }}>
                <Box sx={{ fontWeight: "600", fontSize: "24px" }}>History</Box>
                <Box sx={{ fontFamily: "arial" }}>
                  Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Praesent auctor purus luctus
                  enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                  ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
                  bibendum lorem. Morbi convallis convallis diam sit amet
                  lacinia. Aliquam in elementum tellus. Curabitur tempor quis
                  eros tempus lacinia. Nam bibendum pellentesque quam a
                  convallis. Sed ut vulputate nisi. Integer in felis sed leo
                  vestibulum venenatis. Suspendisse quis arcu sem. Aenean
                  feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna.
                  Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.
                  Mauris sit amet magna non ligula vestibulum eleifend. Nulla
                  varius volutpat turpis sed lacinia. Nam eget mi in purus
                  lobortis eleifend. Sed nec ante dictum sem condimentum
                  ullamcorper quis venenatis nisi. Proin vitae facilisis nisi,
                  ac posuere leo. Jorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Etiam eu turpis molestie, dictum est a,
                  mattis tellus. Sed dignissim, metus nec fringilla accumsan,
                  risus sem sollicitudin lacus, ut interdum tellus elit sed
                  risus. Maecenas eget condimentum velit, sit amet feugiat
                  lectus. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos. Praesent auctor purus
                  luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
                  rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna.
                  Curabitur vel bibendum lorem. Morbi convallis convallis diam
                  sit amet lacinia. Aliquam in elementum tellus.
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ bgcolor: dark ? "#424242" : "#F8F9FA", width: "23vw" }}>
            <Box
              sx={{
                fontWeight: "600",
                fontSize: "2vh",
                p: "3vw",
                textAlign: "center",
              }}
            >
              Birla Institute of Technology & Sciences, Pilani(Jhunjhunu)
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                as="img"
                src="https://upload.wikimedia.org/wikipedia/en/d/d3/BITS_Pilani-Logo.svg"
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box sx={{ p: 2, fontWeight: "600" }}>Motto</Box>
              <Box sx={{ p: 2 }}>jnanam paramam balam</Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", p: 2 }}>
              <Box sx={{ fontWeight: "600" }}>Motto in English</Box>
              <Box>Knowledge is Supreme</Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box sx={{ p: 2, fontWeight: "600" }}>Motto</Box>
              <Box sx={{ p: 2 }}>jnanam paramam balam</Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box sx={{ p: 2, fontWeight: "600" }}>Motto</Box>
              <Box sx={{ p: 2 }}>jnanam paramam balam</Box>
            </Box>
            <Divider sx={{ bgcolor: "black", color: "black" }} />
            <Box
            as="img"
            src="https://upload.wikimedia.org/wikipedia/commons/f/ff/BITS-Pilani_campus_aerial_view.jpg"
            height="15vw"

            sx={{display:'flex', justifyContent:'center', alignItems:'center', p:'1vw'}}
            />
          </Box>
        </Box>
      </main>
    </Box>
  );
}

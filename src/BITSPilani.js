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
            <Box sx={{ m: "3vh", fontWeight: "600", fontSize:'2vh' }}>Contents</Box>
            <Divider />
            <Box sx={{ color: "#3366CC80" }}>
              <Box>
                <Box sx={{ p: "3vh", fontWeight: "600" }} className="booobies">
                  <Box
                    className="dot"
                    sx={{
                      height: "3vh",
                      width: "3vh",
                      bgcolor: "#3366CC",
                      position: "absolute",
                      borderRadius: "50%",
                    }}
                  />
                  Campuses
                </Box>
              </Box>
              <Box>
                <Box sx={{ p: "3vh", fontWeight: "600" }} className="booobies">
                  <Box
                    className="dot"
                    sx={{
                      height: "3vh",
                      width: "3vh",
                      bgcolor: "#3366CC",
                      position: "absolute",
                      borderRadius: "50%",
                    }}
                  />
                  Academics
                </Box>
              </Box>
              <Box>
                <Box sx={{ p: "3vh", fontWeight: "600" }} className="booobies">
                  <Box
                    className="dot"
                    sx={{
                      height: "3vh",
                      width: "3vh",
                      bgcolor: "#3366CC",
                      position: "absolute",
                      borderRadius: "50%",
                    }}
                  />
                  Student Life
                </Box>
              </Box>
              <Box>
                <Box sx={{ p: "3vh", fontWeight: "600" }} className="booobies">
                  <Box
                    className="dot"
                    sx={{
                      height: "3vh",
                      width: "3vh",
                      bgcolor: "#3366CC",
                      position: "absolute",
                      borderRadius: "50%",
                    }}
                  />
                  Alumni
                </Box>
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
                  Birla Institute of Technology & Science, Pilani (Jhunjhunu)
                  (BITS Pilani, Jhunjhunu) is a deemed university in Pilani,
                  Jhunjhunu district, Rajasthan, India.[11] It focuses primarily
                  on higher education and research in engineering and
                  sciences.[12] After expansion to a campus in Dubai, it has
                  become the first international deemed university, spearheading
                  in science, engineering, management and research with five
                  established campuses and 15 academic departments. The
                  institute is backed by the Aditya Birla Group and is one of
                  the first six institutes to be awarded the Institute of
                  Eminence status in 2018.[13][14] BITS conducts the All-India
                  computerized entrance examination, BITSAT (BITS Admission
                  Test).[15][16] Admission is purely assessed by the BITSAT
                  examination.[17][18] The fully residential institute is
                  privately supported.[19] The institute was established in its
                  present form in 1964.[20] During this period, the institute's
                  transformation from a regional engineering college to a
                  national university was backed by G.D. Birla. The university
                  has expanded its campuses from Pilani (Jhunjhunu) to Sancoale
                  (South Goa), Hyderabad, Dubai and Mumbai. Through its highly
                  successful and widespread alumni network spanning globally
                  across varied fields, BITS Pilani has made a significant
                  impact on corporates, academia, research, entrepreneurship,
                  arts and social activism.[21][22]
                </Box>
              </Box>
              <Box sx={{ m: "3vh" }}>
                <Box sx={{ fontWeight: "600", fontSize: "24px" }}>History</Box>
                <Box sx={{ fontFamily: "arial" }}>
                  The Birla Education Trust was founded in 1929; the
                  intermediate college became a degree college and later offered
                  postgraduate courses. The masters programme in electronics
                  began in 1955.[23] Reacting to early criticism about the
                  project, contemporary advisor Thomas Drew said: In my judgment
                  to attempt to develop an American institution in India would
                  be like trying to graft apples on a pine tree. We have not
                  been asked to make such an attempt. We were asked to help
                  devise in India an Indian technological school to produce
                  graduates with the know-how to produce knowledge pertinent for
                  India…. In many respects they consider us immature, rude,
                  hypocritical barbarians who in certain respects happened to
                  hit it lucky. To be viable in India an institution must be
                  framed with Indian values in mind.[24] BITS Pilani became a
                  deemed university established under Section 3 of the UGC Act,
                  1956 by notification No. F.12-23/63.U-2 of 18 June
                  1964.[25][26] In its formative years, the Institute tied up
                  with the Massachusetts Institute of Technology (MIT), Boston,
                  USA.[25] It adopted semester system, modular structure of
                  courses, continuous and internal evaluation, letter grading
                  and the likes. It also created linkages with the industries
                  which yielded structured “Practice School” as an integral
                  component of education.[25] In 1964, the Birla Colleges of
                  Humanities, Commerce, Engineering, Pharmacy and Science were
                  merged to form the Birla Institute of Technology & Science.
                  The board provided direction in developing a curriculum,
                  selecting equipment, upgrading the library and recruiting (and
                  training) an Indian faculty. To quicken the pace of reform he
                  convinced C. R. Mitra to be the new director of the institute.
                  Mitra advocated a "practice school" internship program as a
                  requirement for faculty and students. The Practice School
                  Program is still a requirement for students in BITS. Low,
                  gold-colored building seen from green space Clock tower, BITS
                  Pilani According to Robert Kargon and Stuart Leslie: BITS
                  offered an opportunity to build a leading technological
                  university in India responsive to India's goals, to produce
                  practising engineers who will be in a position to graduate and
                  to build industries in India, under Indian conditions. With
                  its emphasis on the Practice School and ties to Indian
                  industry, it helped educate Indian industrialists along with
                  Indian engineers who would remain in India, in contrast to
                  many other engineering colleges in India, most of whose
                  graduates would leave the country after obtaining their basic
                  engineering education. The Ford Foundation
                  Evaluators...proudly noted that the Indian government, despite
                  having given no direct financial support, was looking to BITS
                  to provide a model for future development in education in
                  engineering and science in India.[24] The acceptance rate of
                  BITS Pilani is 1.47% based on the data of BITSAT 2012.[27]
                  Like Berkeley, BITS Pilani has also experienced student
                  activism. BITS Pilani had to be shut down multiple times
                  because of student strikes during 1973, 1980, and
                  1985.[28][29]
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
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: "1vw",
              }}
            />
          </Box>
        </Box>
      </main>
    </Box>
  );
}

import React, { useContext, useEffect, useState } from "react";
import SelectProfileContainer from "./profiles";
import { FirebaseContext } from "../context/firebase";
import { Card, Header, Loading, Player } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import Fuse from "fuse.js";

const BrowseContainer = ({ slides }) => {
  const [category, setCategory] = useState("series");
  const [slideRows, setSlideRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [translation, setTranslation] = useState(0);
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const [cardIndex, setCardIndex] = useState();

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  const handleClick = (direction, id) => {
    setIsMoved(true);
    setCardIndex(id);

    if (direction === "left" && slideNumber > 0 && cardIndex === id) {
      setSlideNumber(slideNumber - 1);

      setTranslation(
        (prevTranslation) =>
          prevTranslation + (window.innerWidth > 1000 ? 270 : 155)
      );
    }
    if (direction === "right" && slideNumber < 5 && cardIndex === id) {
      setSlideNumber(slideNumber + 1);

      setTranslation(
        (prevTranslation) =>
          prevTranslation - (window.innerWidth > 1000 ? 270 : 155)
      );
    }
  };

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ["data.description", "data.title", "data.genre"],
    });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm, category, slideRows, slides]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1">
        <Header.Container>
          <Header.Group>
            <Header.Logo src={logo} to={ROUTES.HOME} alt="Netflix" />
            <Header.TextLink
              active={category === "series" ? "true" : "false"}
              onClick={() => setCategory("series")}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === "films" ? "true" : "false"}
              onClick={() => setCategory("films")}
            >
              Films
            </Header.TextLink>
          </Header.Group>

          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink
                    onClick={() => {
                      firebase.auth().signOut();
                    }}
                  >
                    Sign Out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Container>

        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {slideRows.map((slideItem, index) => {
          return (
            <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
              <Card.Title>{slideItem.title}</Card.Title>
              <Card.Entities>
                <img
                  style={{ display: !isMoved && "none" }}
                  className="left"
                  src="/images/icons/chevron-right.png"
                  alt="left"
                  onClick={() => handleClick("left", index)}
                />

                {slideItem.data.map((item) => {
                  return (
                    <Card.Item
                      style={
                        index === cardIndex
                          ? {
                              transform: `translateX(${translation}px) scale(1)`,
                            }
                          : {}
                      }
                      key={item.docId}
                      item={item}
                    >
                      <Card.Image
                        src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                      />
                      <Card.Meta>
                        <Card.SubTitle>{item.title}</Card.SubTitle>
                        <Card.Text>{item.description}</Card.Text>
                      </Card.Meta>
                    </Card.Item>
                  );
                })}
                <img
                  className="right"
                  src="/images/icons/chevron-right.png"
                  alt="right"
                  onClick={() => handleClick("right", index)}
                />
              </Card.Entities>
              <Card.Box>
                <Card.Feature category={category}>
                  <Player>
                    <Player.Button />
                    <Player.Video src="/videos/bunny.mp4" />
                  </Player>
                </Card.Feature>
              </Card.Box>
            </Card>
          );
        })}
      </Card.Group>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
};

export default BrowseContainer;

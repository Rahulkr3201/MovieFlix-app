import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { Logo } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { useState } from "react";
import { SUPPORTED_LANGUAGE } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const [IsgptOrMovie, setIsgptOrMovie] = useState(true);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const handleGptSearchClick = () => {
    setIsgptOrMovie(!IsgptOrMovie);
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      //here user have come from signin or signup
      if (user) {
        // console.log("user after signin or signup", user);
        const { uid, email, displayName } = user; //props
        dispatch(addUser({ uid: uid, email: email, displayName: displayName })); //dispatching "userdata" into store
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen  justify-between bg-gradient-to-b from-black z-10 flex flex-col md:flex-row">
      <img className="w-44  mx-auto md:mx-0" src={Logo} alt="logo" />
      {user && (
        <div className="flex">
          {!IsgptOrMovie && (
            <select
              className="h-11 w-20 text-sm bg-black rounded-md p-1 text-white mr-4 mt-3 hover:cursor-pointer"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGE.map((lang) => (
                <option key={lang.identifier} vlaue={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          {IsgptOrMovie ? (
            <button
              className=" h-11 w-40 bg-purple-800 rounded-sm text-white p-2 mr-6 mt-3 "
              onClick={handleGptSearchClick}
            >
              Gpt Search
            </button>
          ) : (
            <button
              className=" h-11 w-40 bg-purple-800 rounded-sm text-white p-2 mr-6 mt-3 "
              onClick={handleGptSearchClick}
            >
              Home Page
            </button>
          )}

          <div>
            <img
              className="w-11 h-11 text-center mt-3 mr-4 ml-1"
              alt="usericon"
              src="https://occ-0-2610-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
            />
            <button
              onClick={handleSignOut}
              className="font-semibold mr-5 text-white"
            >
              signout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

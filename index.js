const boxImg = document.querySelector(".box__img");
const boxBg = document.getElementById("img__bg");
const boxImageItem = document.getElementById("image__item");
const boxImageTitle = document.getElementById("image__title");
const boxDesc = document.getElementById("image__desc");
const boxMain = document.querySelector(".img__main"); // Updated selection
const boxImages = document.querySelector(".img__items");

const boxs = [
    // 1
    {
        image: "./assets/image/menu/menu__items/1/img__1.jpg",
        title: "./assets/image/menu/menu__items/1/title1.svg",
        desc: "Face off in the ultimate 5v5 battle arena",
        gradient:
            "radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(88, 111, 119) 0%, rgb(10, 10, 10) 70%)",
    },
    // 2
    {
        image: "./assets/image/menu/menu__items/2/c9ab2357a330dc4f3b745292783b219442ff24a6-1920x1080.jpg",
        title: "./assets/image/menu/menu__items/2/0b590a928c4d540ac983fc993748d7c9d5e09cca-146x98.svg",
        desc: "Style on your enemies in this 5v5 tactical shooter",
        gradient:
            "radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(22, 22, 22) 0%, rgb(10, 10, 10) 70%)",
    },
    // 3
    {
        image: "./assets/image/menu/menu__items/3/fce3ba7a937c6d491fc3653458c83d5e5f36c0ef-1920x1080.jpg",
        title: "./assets/image/menu/menu__items/3/5d048c0d4c32f49dca3a95d66355482e5243eae9-148x100.svg",
        desc: "A TEAM-BUILDING BATTLE OF WITS",
        gradient:
            "radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(60, 52, 163) 0%, rgb(10, 10, 10) 70%)",
    },
    // 4
    {
        image: "./assets/image/menu/menu__items/4/95f244060cf64373f7b30e9db7edbbd41f705f04-1920x1080.jpg",
        title: "./assets/image/menu/menu__items/4/4cb514ef0c1c6cc8c0afe8f0f4e9929757bcf9df-146x48.svg",
        desc: "Master every moment in this strategy card game",
        gradient:
            "radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(42, 37, 82) 0%, rgb(10, 10, 10) 70%)",
    },
    // 5
    {
        image: "./assets/image/menu/menu__items/5/a0d4a04e8059f9e9426b8a8ed7a2b0174886e754-1320x743.jpg",
        title: "./assets/image/menu/menu__items/5/4c584a414f13767f7cdec5d5f50295f70e6f3339-144x95.svg",
        desc: "LEAGUE OF LEGENDS, NOW ON MOBILE",
        gradient:
            "radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(160, 193, 236) 0%, rgb(10, 10, 10) 70%)",
    },

    {
        image: "./assets/image/menu/menu__items/6/96d6ec42a3be4ed02195fb31816bb2f188c5121d-1320x743.jpg",
        title: "./assets/image/menu/menu__items/6/52ed2c5cd26fab4d34a7908c90a6c903c410eeba-1600x486.png",
        desc: "EXPLORE ZAUN AS EKKO IN THIS ACTION PLATFORMER",
        gradient:
            "radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(173, 110, 137) 0%, rgb(10, 10, 10) 70%)",
    },
    // 7
    {
        image: "./assets/image/menu/menu__items/7/410485481cef2bf4a4a15e2beedf9b929012a0c3-1320x743.jpg",
        title: "./assets/image/menu/menu__items/7/6f5b965b8620a71d62da10b9ae851f6947773101-262x165.svg",
        desc: "Riot Forge Presents Hextech Mayhem",
        gradient:
            "radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(172, 76, 84) 0%, rgb(10, 10, 10) 70%)",
    },
    // 8
    {
        image: "./assets/image/menu/menu__items/8/02281bbdccf6311df4ae705d099ed45beb42f64e-1920x1080.jpg",
        title: "./assets/image/menu/menu__items/8/47eddbfb9494161a0297c80be917ee6065d1c64b-400x210.png",
        desc: "PLAY AS SYLAS AND LIBERATE DEMACIA FROM TYRANNY IN THIS ACTION RPG",
        gradient:
            "radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(57, 49, 76) 0%, rgb(10, 10, 10) 70%)",
    },
    // 9
    {
        image: "./assets/image/menu/menu__items/9/904be9b7fb2dc287fc1a8f30f0421134eed3a35d-1320x743.jpg",
        title: "./assets/image/menu/menu__items/9/174ae92723a2c9b289cdb68e4c64916a6ddc6527-406x295.svg",
        desc: "RISE AGAINST RUIN IN THIS TURN BASED RPG",
        gradient:
            "radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(116, 193, 175) 0%, rgb(10, 10, 10) 70%)",
    },
    // 10
    {
        image: "./assets/image/menu/menu__items/10/8b0fd50a7bbd02b24bc2c5df278b1a556cf0cecf-1320x743.jpg",
        title: "./assets/image/menu/menu__items/10/40c381c01bfaaf46654ab0bc146be3b720fc0606-350x108.png",
        desc: "A Song Lives Forever",
        gradient:
            " radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(66, 88, 166) 0%, rgb(10, 10, 10) 70%)",
    },
    // 11
    {
        image: "./assets/image/menu/menu__items/11/887a22f93dff0593674b4df1a267b840f85b01e7-1320x743.jpg",
        title: "./assets/image/menu/menu__items/11/9af0c8d13f37f0c50fa261017184ee1bcf5fe183-54x53.svg",
        desc: "PUBLISHER OF COMPLETABLE EXPERIENCES FROM THE LEAGUE UNIVERSE",
        gradient:
            "radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(48, 76, 64) 0%, rgb(10, 10, 10) 70%)",
    },
    // 12
    {
        image: "./assets/image/menu/menu__items/12/8459546a9d8a91074ef7f4ef8e43ebd561d30396-1920x1080.jpg",
        title: "./assets/image/menu/menu__items/12/8f34104a42ab1e5e4b6251d33ae007ffdab70cba-3997x1000.png",
        desc: "",
        gradient:
            "radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(90, 190, 205) 0%, rgb(10, 10, 10) 70%)",
    },
    // 13
    {
        image: "./assets/image/menu/menu__items/13/46e6f7f8295ccf1ffa2480d7f0c1b9926204c08f-1920x1080.jpg",
        title: "./assets/image/menu/menu__items/13/e038e934212b5055a402dbb66e92949e55f6b222-1003x720.png",
        desc: "",
        gradient:
            "radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(147, 34, 28) 0%, rgb(10, 10, 10) 70%)",
    },
    // 14
    {
        image: "./assets/image/menu/menu__items/14/70361f54e9202cccae3852adebdc567246d83179-1320x743.jpg",
        title: "./assets/image/menu/menu__items/14/6d4d66ddf81ddfecddd3237c8e2b50ac0cabab76-148x45.svg",
        desc: "AN ANIMATED SERIES ON NETFLIX FROM THE WORLD OF LEAGUE OF LEGENDS",
        gradient:
            "radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(43, 61, 109) 0%, rgb(10, 10, 10) 70%)",
    },
    // 15
    {
        image: "./assets/image/menu/menu__items/15/ada5282be4b3fa4225027ac9170014db245deb58-1320x743.jpg",
        title: "./assets/image/menu/menu__items/20/title20.svg",
        desc: "THE DEFINITIVE SOURCE FOR THE WORLD OF LEAGUE OF LEGENDS",
        gradient:
            "radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(35, 83, 87) 0%, rgb(10, 10, 10) 70%)",
    },
    // 16
    {
        image: "./assets/image/menu/menu__items/16/73a9ef5885cacca97a8589c4263d324c290cf536-1320x743.jpg",
        title: "./assets/image/menu/menu__items/20/title20.svg",
        desc: "MUSIC HAS A NEW HOME",
        gradient:
            "radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(121, 49, 123) 0%, rgb(10, 10, 10) 70%)",
    },
    // 17
    {
        image: "./assets/image/menu/menu__items/17/92cb46a6c9e197cda4523d98c0ae54b93775ff4d-1320x743.jpg",
        title: "./assets/image/menu/menu__items/17/2db135331118263325cdb684eb7feeaecede0be8-144x40.svg",
        desc: "UNLEASH PLAY",
        gradient:
            "radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(212, 190, 179) 0%, rgb(10, 10, 10) 70%)",
    },
    // 18
    {
        image: "./assets/image/menu/menu__items/18/14c0d13d9191eda569d1c5d4bc8905175a2e934b-1320x743.jpg",
        title: "./assets/image/menu/menu__items/20/title20.svg",
        desc: "THE OFFICIAL HOME OF RIOT GAMES MERCH",
        gradient:
            " radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(0, 61, 90) 0%, rgb(10, 10, 10) 70%)",
    },
    // 19
    {
        image: "./assets/image/menu/menu__items/19/b9c9b6e5de1aaf80222934c67e4e7947d877b443-1320x743.jpg",
        title: "./assets/image/menu/menu__items/20/title20.svg",
        desc: "YOUR MOBILE COMPANION FOR ALL THINGS RIOT GAMES",
        gradient:
            " radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(252, 63, 67) 0%, rgb(10, 10, 10) 70%)",
    },
    // 20
    {
        image: "./assets/image/menu/menu__items/20/1d1c0b2d99b5da39e0eb5ae4b136c5c3a604e30c-1320x743.jpg",
        title: "./assets/image/menu/menu__items/20/title20.svg",
        desc: "FROM TECH TO TILT, WE’RE HERE TO HELP YOU",
        gradient:
            "radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(234, 0, 40) 0%, rgb(10, 10, 10) 70%)",
    },
];
boxImages.style.opacity = "0";
boxImages.style.display = "none";

const itemBoxes = document.querySelectorAll(".mega__li");
let count = 0;

itemBoxes.forEach((item, index) => {
    item.addEventListener("mouseover", () => {
        const box = boxs[index];
        boxImages.style.display = "block";
        boxImages.style.opacity = "100";
        boxMain.style.opacity = "0";
        boxBg.style.backgroundImage = box.gradient;
        boxImageItem.src = box.image;
        boxImageTitle.src = box.title;
        boxDesc.textContent = box.desc;

        const titleCustom = document.querySelector(".title__custom");
        if (index > 13 && index != 16) {
            boxImageTitle.style.display = "none";
            titleCustom.style.display = "block";
            switch (index) {
                case 14: {
                    titleCustom.textContent = "UNIVERSE";
                    break;
                }
                case 15: {
                    titleCustom.textContent = "RIOT GAME MUSIC";
                    break;
                }
                case 17: {
                    titleCustom.textContent = "RIOT MARCH";
                    break;
                }
                case 18: {
                    titleCustom.textContent = "RIOT MOBILE";
                    break;
                }
                case 19: {
                    titleCustom.textContent = "RIOT SUPORT";
                    break;
                }
            }
        } else {
            boxImageTitle.style.display = "block";
            titleCustom.style.display = "none";
        }
    });

    item.addEventListener("mouseout", () => {
        boxImages.style.display = "none";
        if (boxBg) boxBg.style.backgroundImage = "";
        if (boxImageItem) boxImageItem.src = "";
        if (boxImageTitle) boxImageTitle.src = "";
        if (boxDesc) boxDesc.textContent = "";
        boxMain.style.opacity = "100";
    });
});
const body = document.querySelector("body");
const menuOpen = document.querySelector(".logo__open");
const menu = document.querySelector(".mega__menu");
const logo = document.querySelector(".riot__game");
const exit = document.querySelector(".fa-x");
const menuBody = document.querySelector(".mega__body");
const menuBg = document.querySelector(".mega__bg");
// if (window.getComputedStyle(menu).display == `none`) {
//     body.style.overflow = "auto";
//     // menu.style.overflow = "auto";
// } else {
//     body.style.overflow = "hidden";
// }
menuOpen.addEventListener("click", () => {
    menu.style.display = "block";
});
logo.addEventListener("click", () => {
    menu.style.display = "none";
});
exit.addEventListener("click", () => {
    menu.style.display = "none";
});

menuBg.addEventListener("click", () => {
    menu.style.display = "none";
});

/////////open__megaMenu___list////////
const megaSubImg = document.querySelector(".mega__sub--img");
const megaSubList = document.querySelectorAll(".mega__sub--list");
const megaTitleCol = document.querySelectorAll(".title");
const megaTitleName = document.querySelectorAll(".mega__title--name");
const megaAct = document.querySelectorAll(".mega__act");
megaTitleCol.forEach((mega, index) => {
    mega.addEventListener("click", () => {
        if (menu.offsetWidth < 1025) {
            megaTitleCol.forEach((megaOther, num) => {
                if (num != index) {
                    megaTitleCol[num].style.background =
                        "rgba(186, 186, 186, 0.1)";
                    megaTitleName[num].style.color = "#0a0a0a";
                    megaSubList[num].style.display = "none";
                    megaSubList[num].style.opacity = "0";
                    if (num == 0) {
                        megaSubImg.style.display = "none";
                        megaSubImg.style.opacity = "0";
                    }
                }
            });
            if (index == 0) {
                if (window.getComputedStyle(megaSubImg).display === `none`) {
                    megaSubImg.style.display = "grid";
                    megaSubImg.style.opacity = "100";
                    megaAct[index].style.transform =
                        "rotateZ(180deg) translateY(2px)";
                    mega.style.background = "#1f1f1f";
                    megaTitleName[index].style.color = "#fcfcfc";
                } else {
                    megaSubImg.style.display = "none";
                    megaSubImg.style.opacity = "0";
                    megaAct[index].style.transform =
                        "rotateZ(0deg) translateY(0px)";
                    mega.style.background = "rgba(186, 186, 186, 0.1)";
                    megaTitleName[index].style.color = "#0a0a0a";
                }
            } else {
                if (
                    window.getComputedStyle(megaSubList[index]).display ===
                    `none`
                ) {
                    megaSubList[index].style.display = "block";
                    megaSubList[index].style.opacity = "100";
                    megaAct[index].style.transform =
                        "rotateZ(180deg) translateY(2px)";
                    mega.style.background = "#1f1f1f";
                    megaTitleName[index].style.color = "#fcfcfc";
                } else {
                    megaSubList[index].style.display = "none";
                    megaSubList[index].style.opacity = "0";
                    megaAct[index].style.transform =
                        "rotateZ(0deg) translateY(0px)";
                    mega.style.background = "rgba(186, 186, 186, 0.1)";
                    megaTitleName[index].style.color = "#0a0a0a";
                }
            }
        } else {
            megaSubImg.style.display = "none";
        }
    });
});
megaTitleCol[0].addEventListener("click", () => {
    if (menu.offsetWidth < 1025) {
    }
});

//////////open_close---sidebar__submenu///////////
const sidebarSubMenu = document.querySelectorAll(".sidebar__sub--menu");
const sidebarItem = document.querySelectorAll(".sidebar__item__link");
const sidebarAct = document.querySelectorAll(".sidebar__act");
sidebarItem.forEach((item, index) => {
    item.addEventListener("click", () => {
        if (index == 2) {
            if (window.getComputedStyle(sidebarSubMenu[0]).display === `none`) {
                sidebarSubMenu[0].style.display = "block";
                sidebarAct[0].style.transform =
                    "rotateZ(180deg) translateY(2px)";
            } else {
                sidebarSubMenu[0].style.display = "none";
                sidebarAct[0].style.transform = "rotateZ(0deg) translateY(0px)";
            }
        } else if (index == 4) {
            if (window.getComputedStyle(sidebarSubMenu[1]).display === `none`) {
                sidebarSubMenu[1].style.display = "block";
                sidebarAct[1].style.transform =
                    "rotateZ(180deg) translateY(2px)";
            } else {
                sidebarSubMenu[1].style.display = "none";
                sidebarAct[1].style.transform = "rotateZ(0deg) translateY(0px)";
            }
        }
    });
});

//////open__sidebar//////
const barIcon = document.querySelector(".bars__icon");
const sidebarContent = document.querySelector(".sidebar");
const sidebarExit = document.querySelector(".sidebar__exit");
barIcon.addEventListener("click", () => {
    // sidebar.style.display = "block";
    sidebar.style.visibility = "visible";

    // sidebarContent.style.opacity = "100";
    sidebarContent.style.transform = "translateX(-500px)";
});
/////close__sidebar//////
const sidebar = document.querySelector(".sidebarrrr");
const sidebarX = document.querySelector(".sidebar__x");
sidebarX.addEventListener("click", () => {
    // sidebar.style.display = "none";
    // sidebarContent.style.opacity = "0";
    sidebar.style.visibility = "hidden";
    sidebarContent.style.transform = "translateX(0px)";
});
sidebarExit.addEventListener("click", () => {
    sidebar.style.visibility = "hidden";
    sidebarContent.style.transform = "translateX(0px)";
});
///////////news///////////////////////////////
const newsList = document.querySelector(".news__list");
const newsItem = document.querySelector(".news__item");
const newsArrowL = document.querySelector(".news-arrow-left");
const newsArrowR = document.querySelector(".news-arrow-right");
const newsLine = document.querySelector(".news__line--color");
let newLineCurrent = 0;
let newsPrecentItem = 0;
newsArrowL.addEventListener("click", () => {
    if (role.offsetWidth > 600) {
        newsList.style.transform = `translate3d(0px, 0px ,0px)`;
        newsLine.style.width = "0%";
        newsArrowR.style.color = "#c8aa6e";
        newsArrowL.style.color = "#e3e3e3";
    } else {
        if (newLineCurrent > 0) {
            newLineCurrent -= 50;
            newsLine.style.width = `${newLineCurrent}%`;
            newsArrowR.style.color = "#c8aa6e";
            newsArrowL.style.color = "#e3e3e3";
        }

        if (newsPrecentItem < -500) {
            newsPrecentItem += newsItem.offsetWidth + 33;
            newsList.style.transform = `translate3d(${newsPrecentItem}px,0px,0px)`;
        } else if (newsPrecentItem < 0) {
            newsPrecentItem += newsItem.offsetWidth + 34;
            newsList.style.transform = `translate3d(0px,0px,0px)`;
        }
    }
});
newsArrowR.addEventListener("click", () => {
    if (role.offsetWidth > 600) {
        newsList.style.transform = `translate3d(-${
            newsItem.offsetWidth + 32
        }px, 0px ,0px)`;
        newsLine.style.width = "100%";
        newsArrowR.style.color = "#e3e3e3";
        newsArrowL.style.color = "#c8aa6e";
    } else {
        if (newLineCurrent < 100) {
            newLineCurrent += 50;
            newsLine.style.width = `${newLineCurrent}%`;
            newsArrowR.style.color = "#e3e3e3";
            newsArrowL.style.color = "#c8aa6e";
        }
        if (role.offsetWidth > 400) {
            if (newsPrecentItem > -750) {
                newsPrecentItem -= newsItem.offsetWidth + 35;
                newsList.style.transform = `translate3d(${newsPrecentItem}px,0px,0px)`;
            }
        } else {
            if (newsPrecentItem > -450) {
                newsPrecentItem -= newsItem.offsetWidth + 35;
                newsList.style.transform = `translate3d(${newsPrecentItem}px,0px,0px)`;
            }
        }
    }
});
//////role//////////////
// Select all item boxes
const roleItems = document.querySelectorAll(".role__item");
const roleItemImg = document.querySelectorAll(".role__icon--img");
const roleTitle = ["Akali", "Yasuo", "Lux", "Jinx", "Thresh", "Leona"];
const roleSubtitle = [
    "The Rogue Assassin",
    "The Unforgiven",
    "The Lady of Luminosity",
    "The Loose Cannon",
    "The Chain Warden",
    "The Radiant Dawn",
];
const roleBackground = ["1.1.webp", "2", "3.avif", "4.svg", "5.avif", "6.avif"];

const roleImage = document.querySelector(".role__media--img");
const roleHeader = document.querySelector(".role__header");
const roleInfo = document.querySelector(".role__info");
const roleBg = document.querySelector(".role__bg--img");
roleItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        roleImage.src = `./assets/image/role/role__media/${index + 1}.avif`;
        roleItemImg.forEach((a, n) => {
            if (n != index) {
                a.style.filter = "brightness(50%)";
            }
        });
        roleItemImg[index].style.filter = "brightness(100%)";

        roleHeader.textContent = roleTitle[index];
        roleInfo.textContent = roleSubtitle[index];
        roleBg.src = `./assets/image/role/role__bg/${roleBackground[index]}`;
    });
});

//role--Reposive/////
///////////news///////////////////////////////
const role = document.querySelector(".role");
const roleList = document.querySelector(".role__list");
const roleItem = document.querySelector(".role__item");
const roleArrowL = document.querySelector(".role-arrow-left");
const roleArrowR = document.querySelector(".role-arrow-right");
const roleLine = document.querySelector(".role__line--color");
let positionPrecent = 0;
let positionPrecentItem = -8;

roleArrowL.addEventListener("click", () => {
    if (role.offsetWidth < 1025) {
        if (positionPrecent > 0) {
            positionPrecent -= 50;
            roleLine.style.width = `${positionPrecent}%`;
        }
        if (positionPrecentItem < -8) {
            positionPrecentItem += roleItem.offsetWidth;
            roleList.style.transform = `translate3d(${
                positionPrecentItem + 8
            }px,0px,0px)`;
        }
    } else {
        if (positionPrecent > 0) {
            positionPrecent -= 100;
            roleLine.style.width = `${positionPrecent}%`;
        }

        roleList.style.transform = `translate3d(0px, 0px ,0px)`;
    }

    roleArrowR.style.color = "#c8aa6e";
    roleArrowL.style.color = "#e3e3e3";
});
roleArrowR.addEventListener("click", () => {
    if (role.offsetWidth < 1025) {
        if (positionPrecent < 100) {
            positionPrecent += 50;
            roleLine.style.width = `${positionPrecent}%`;
        }
        if (positionPrecentItem > -400) {
            positionPrecentItem -= roleItem.offsetWidth;
            roleList.style.transform = `translate3d(${
                positionPrecentItem - 8
            }px,0px,0px)`;
        }
    } else {
        if (positionPrecent < 100) {
            positionPrecent += 100;
            roleLine.style.width = `${positionPrecent}%`;
        }
        roleList.style.transform = `translate3d(-${
            roleItem.offsetWidth + 8
        }px, 0px ,0px)`;
    }

    roleArrowR.style.color = "#e3e3e3";
    roleArrowL.style.color = "#c8aa6e";
});

// ///////spot////////////////////
const bgName = ["1bg.avif", "2bg.webp", "3bg.webp"];
const spotVideo = [
    "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/bbc27473157462adacf0de441a8796268eb2d0ac.mp4",
    "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/0a9b9f8dacb54086c58c1af8aa880d7cf6d7fea6.mp4",
    "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/e5791dbc0787a96e83b82df20d44375f09f4d861.mp4",
];
const spotTitle = [
    "THE MOST POPULAR GAME MODE",
    "ALL RANDOM, ALL MID",
    "A FREE-FOR-ALL WAR FOR SUPREMACY",
];
const spotDesc = [
    "Clear your lane, dive into epic 5v5 team fights, and destroy the enemy nexus before they destroy yours.",
    "Battle across an icy bridge as your team of random champions charge toward the enemy Nexus in this chaotically fun 5v5 game mode.",
    "Assemble a squad of champions that battle on your behalf. Outlast all seven of your opponents and become the last person standing.",
];
const spotBg = document.querySelector(".spot__bg--img");
const spotV = document.querySelector(".spot__video");
const spotSource = document.querySelector(".video__source");
const spotItem = document.querySelectorAll(".spot__item");
const spotMediaTitle = document.querySelector(".spot__media--title");
const spotMediaDesc = document.querySelector(".spot__media--desc");
spotItem.forEach((item, index) => {
    item.addEventListener("click", () => {
        spotBg.src = `./assets/image/spot/${bgName[index]}`;
        spotSource.src = spotVideo[index];
        spotV.load();
        spotV.play();
        spotMediaTitle.textContent = spotTitle[index];
        spotMediaDesc.textContent = spotDesc[index];
    });
});

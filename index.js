// const inputColor = document.querySelector(".input1");
// const inputW = document.querySelector(".input2");
// const inputH = document.querySelector(".input3");
// const btn = document.querySelector(".btn");
// const box = document.querySelector(".box");

// btn.addEventListener("click", function () {
//     const c = inputColor.value;
//     const w = inputW.value;
//     const h = inputH.value;
//     create(w, h, c);
// });

// function create(w, h, c) {
//     if (!c || !w || !h) {
//         inputColor.style.border = "2px solid red";
//         inputW.style.border = "2px solid red";
//         inputH.style.border = "2px solid red";
//         alert("Vui lòng nhập đầy đủ mã màu, chiều ngang và chiều dọc!");
//         return;
//     } else if (!/^#[0-9a-fA-F]{3}$|^#[0-9a-fA-F]{6}$/.test(c)) {
//         inputColor.style.border = "2px solid red";
//         alert("Nhập sai mã màu vui lòng nhập lại");
//         return;
//     } else if (!/^\d+px$/.test(h)) {
//         inputH.style.border = "2px solid red";
//         alert("Nhập sai kích thước, nhập lại");
//         return;
//     } else if (!/^\d+px$/.test(w)) {
//         inputW.style.border = "2px solid red";
//         alert("Nhập sai kích thước, nhập lại");
//         return;
//     } else {
//         box.style.backgroundColor = c;
//         box.style.width = w;
//         box.style.height = h;
//     }
// }

// box.addEventListener("click", function () {
//     box.style.display = "none";
//     document.querySelector(".input1").value = "";
//     document.querySelector(".input2").value = "";
//     document.querySelector(".input3").value = "";
// });

const boxBg = document.getElementById("img__bg");
const boxImageItem = document.getElementById("image__item");
const boxImageTitle = document.getElementById("image__title");
const boxDesc = document.getElementById("image__desc");

const items = [
    // 1
    {
        image: "./assets/image/menu/menu__items/1/img__1.jpg",
        title: "./assets/image/menu/menu__items/1/title1.svg",
        desc: "Face off in the ultimate 5v5 battle arena",
        gradient:
            "radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(88, 111, 119) 0%, rgb(10, 10, 10) 70%);",
    },
    // 2
    {
        image: "./assets/image/menu/menu__items/2/c9ab2357a330dc4f3b745292783b219442ff24a6-1920x1080.jpg",
        title: "./assets/image/menu/menu__items/2/0b590a928c4d540ac983fc993748d7c9d5e09cca-146x98.svg",
        desc: "Style on your enemies in this 5v5 tactical shooter",
        gradient:
            "radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(22, 22, 22) 0%, rgb(10, 10, 10) 70%);",
    },
    // 3
    {
        image: "./assets/image/menu/menu__items/3/fce3ba7a937c6d491fc3653458c83d5e5f36c0ef-1920x1080.jpg",
        title: "./assets/image/menu/menu__items/3/5d048c0d4c32f49dca3a95d66355482e5243eae9-148x100.svg",
        desc: "A TEAM-BUILDING BATTLE OF WITS",
        gradient:
            "radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(60, 52, 163) 0%, rgb(10, 10, 10) 70%);",
    },
    // 4
    {
        image: "./assets/image/menu/menu__items/4/95f244060cf64373f7b30e9db7edbbd41f705f04-1920x1080.jpg",
        title: "./assets/image/menu/menu__items/4/4cb514ef0c1c6cc8c0afe8f0f4e9929757bcf9df-146x48.svg",
        desc: "Master every moment in this strategy card game",
        gradient:
            "radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(42, 37, 82) 0%, rgb(10, 10, 10) 70%);",
    },
    // 5
    {
        image: "./assets/image/menu/menu__items/5/a0d4a04e8059f9e9426b8a8ed7a2b0174886e754-1320x743.jpg",
        title: "./assets/image/menu/menu__items/5/4c584a414f13767f7cdec5d5f50295f70e6f3339-144x95.sv",
        desc: "LEAGUE OF LEGENDS, NOW ON MOBILE",
        gradient:
            "radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(160, 193, 236) 0%, rgb(10, 10, 10) 70%);",
    },
    // 6
    {
        image: "./assets/image/menu/menu__items/6/96d6ec42a3be4ed02195fb31816bb2f188c5121d-1320x743.jpg",
        title: "./assets/image/menu/menu__items/6/52ed2c5cd26fab4d34a7908c90a6c903c410eeba-1600x486.png",
        desc: "EXPLORE ZAUN AS EKKO IN THIS ACTION PLATFORMER",
        gradient:
            "radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(173, 110, 137) 0%, rgb(10, 10, 10) 70%);",
    },
    // 7
    {
        image: "./assets/image/menu/menu__items/7/410485481cef2bf4a4a15e2beedf9b929012a0c3-1320x743.jpg",
        title: "./assets/image/menu/menu__items/7/6f5b965b8620a71d62da10b9ae851f6947773101-262x165.svg",
        desc: "Riot Forge Presents Hextech Mayhem",
        gradient:
            "radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(172, 76, 84) 0%, rgb(10, 10, 10) 70%);",
    },
    // 8
    {
        image: "./assets/image/menu/menu__items/8/02281bbdccf6311df4ae705d099ed45beb42f64e-1920x1080.jpg",
        title: "./assets/image/menu/menu__items/8/47eddbfb9494161a0297c80be917ee6065d1c64b-400x210.png",
        desc: "PLAY AS SYLAS AND LIBERATE DEMACIA FROM TYRANNY IN THIS ACTION RPG",
        gradient:
            "radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(57, 49, 76) 0%, rgb(10, 10, 10) 70%);",
    },
    // 9
    {
        image: "./assets/image/menu/menu__items/9/904be9b7fb2dc287fc1a8f30f0421134eed3a35d-1320x743.jpg",
        title: "./assets/image/menu/menu__items/9/174ae92723a2c9b289cdb68e4c64916a6ddc6527-406x295.svg",
        desc: "RISE AGAINST RUIN IN THIS TURN BASED RPG",
        gradient:
            "radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(116, 193, 175) 0%, rgb(10, 10, 10) 70%);",
    },
    // 10
    {
        image: "./assets/image/menu/menu__items/10/8b0fd50a7bbd02b24bc2c5df278b1a556cf0cecf-1320x743.jpg",
        title: "./assets/image/menu/menu__items/10/40c381c01bfaaf46654ab0bc146be3b720fc0606-350x108.png",
        desc: "A Song Lives Forever",
        gradient:
            " radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(66, 88, 166) 0%, rgb(10, 10, 10) 70%);",
    },
    // 11
    {
        image: "./assets/image/menu/menu__items/11/887a22f93dff0593674b4df1a267b840f85b01e7-1320x743.jpg",
        title: "./assets/image/menu/menu__items/11/9af0c8d13f37f0c50fa261017184ee1bcf5fe183-54x53.svg",
        desc: "PUBLISHER OF COMPLETABLE EXPERIENCES FROM THE LEAGUE UNIVERSE",
        gradient:
            "radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(48, 76, 64) 0%, rgb(10, 10, 10) 70%);;",
    },
    // 12
    {
        image: "./assets/image/menu/menu__items/12/8459546a9d8a91074ef7f4ef8e43ebd561d30396-1920x1080.jpg",
        title: "./assets/image/menu/menu__items/12/8f34104a42ab1e5e4b6251d33ae007ffdab70cba-3997x1000.png",
        desc: "",
        gradient:
            "radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(90, 190, 205) 0%, rgb(10, 10, 10) 70%);",
    },
    // 13
    {
        image: "./assets/image/menu/menu__items/13/46e6f7f8295ccf1ffa2480d7f0c1b9926204c08f-1920x1080.jpg",
        title: "./assets/image/menu/menu__items/13/e038e934212b5055a402dbb66e92949e55f6b222-1003x720.png",
        desc: "",
        gradient:
            "radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(147, 34, 28) 0%, rgb(10, 10, 10) 70%);",
    },
    // 14
    {
        image: "./assets/image/menu/menu__items/14/70361f54e9202cccae3852adebdc567246d83179-1320x743.jpg",
        title: "./assets/image/menu/menu__items/14/6d4d66ddf81ddfecddd3237c8e2b50ac0cabab76-148x45.svg",
        desc: "AN ANIMATED SERIES ON NETFLIX FROM THE WORLD OF LEAGUE OF LEGENDS",
        gradient:
            "radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(43, 61, 109) 0%, rgb(10, 10, 10) 70%);",
    },
    // 15
    {
        image: "./assets/image/menu/menu__items/15/ada5282be4b3fa4225027ac9170014db245deb58-1320x743.jpg",
        title: "./assets/image/menu/menu__items/20/title20.svg",
        desc: "THE DEFINITIVE SOURCE FOR THE WORLD OF LEAGUE OF LEGENDS",
        gradient:
            "radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(35, 83, 87) 0%, rgb(10, 10, 10) 70%);",
    },
    // 16
    {
        image: "./assets/image/menu/menu__items/16/73a9ef5885cacca97a8589c4263d324c290cf536-1320x743.jpg",
        title: "./assets/image/menu/menu__items/20/title20.svg",
        desc: "MUSIC HAS A NEW HOME",
        gradient:
            "radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(121, 49, 123) 0%, rgb(10, 10, 10) 70%);",
    },
    // 17
    {
        image: "./assets/image/menu/menu__items/17/92cb46a6c9e197cda4523d98c0ae54b93775ff4d-1320x743.jpg",
        title: "./assets/image/menu/menu__items/17/2db135331118263325cdb684eb7feeaecede0be8-144x40.svg",
        desc: "UNLEASH PLAY",
        gradient:
            "radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(212, 190, 179) 0%, rgb(10, 10, 10) 70%);",
    },
    // 18
    {
        image: "./assets/image/menu/menu__items/18/14c0d13d9191eda569d1c5d4bc8905175a2e934b-1320x743.jpg",
        title: "./assets/image/menu/menu__items/20/title20.svg",
        desc: "THE OFFICIAL HOME OF RIOT GAMES MERCH",
        gradient:
            " radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(0, 61, 90) 0%, rgb(10, 10, 10) 70%);",
    },
    // 19
    {
        image: "./assets/image/menu/menu__items/19/b9c9b6e5de1aaf80222934c67e4e7947d877b443-1320x743.jpg",
        title: "./assets/image/menu/menu__items/20/title20.svg",
        desc: "YOUR MOBILE COMPANION FOR ALL THINGS RIOT GAMES",
        gradient:
            " radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(252, 63, 67) 0%, rgb(10, 10, 10) 70%);",
    },
    // 20
    {
        image: "./assets/image/menu/menu__items/20/1d1c0b2d99b5da39e0eb5ae4b136c5c3a604e30c-1320x743.jpg",
        title: "./assets/image/menu/menu__items/20/title20.svg",
        desc: "FROM TECH TO TILT, WE’RE HERE TO HELP YOU",
        gradient:
            "radial-gradient(160.43% 179.54% at 100.43% 100%, rgb(234, 0, 40) 0%, rgb(10, 10, 10) 70%);",
    },
];


const links = {
    "Math": [
        {
            "title": "Introductory Calculus: Oxford Mathematics 1st Year Student Lecture",
            "url": "https://www.youtube.com/embed/I3GWzXRectE"
        },
        {
            "title": "Statistics and Probability Full Course || Statistics For Data Science",
            "url": "https://www.youtube.com/embed/sbbYntt5CJk"
        },
        {
            "title": "Linear Algebra - Full College Course",
            "url": "https://www.youtube.com/embed/JnTa9XtvmfI"
        }
    ],



    "AI": [
        {
            "title": "Machine Learning for Everybody – Full Course",
            "url": "https://www.youtube.com/embed/i_LwzRVP7bg?si=hjJRDPk4hluVSYXI"
        },
        {
            "title": "Deep Learning Crash Course for Beginners",
            "url": "https://www.youtube.com/embed/VyWAvY2CF9c?si=lkECUjfg2wwDQ0_l"
        },
        {
            "title": "Natural Language Processing In AI 2023 | Natural Language Processing Course 2023 | Simplilearn",
            "url": "https://www.youtube.com/embed/kqg-c3ACxgk?si=XYmEzNlwngLDPHzY"
        }
    ],


    "ComputerProgramming": [
        {
            "title": "Intro to Java Programming - Course for Absolute Beginners",
            "url": "https://www.youtube.com/embed/GoXwIVyNvX0"
        },
        {
            "title": "Python for Beginners - Learn Python in 1 Hour",
            "url": "https://www.youtube.com/embed/kqtD5dpn9C8"
        },
        {
            "title": "C++ Tutorial for Beginners - Learn C++ in 1 Hour",
            "url": "https://www.youtube.com/embed/ZzaPdXTrSb8"
        }
    ]

};


function load(link) {
    const youTube_Vid = link;

    const youtubePlayer = document.getElementById("youTube");

    youtubePlayer.src = youTube_Vid;

}

function getGroupLinks(Goup) {

    if (Goup == "MATH") {
        return links.Math
    } else
        if (Goup == "Computer Programming") {
            return links.ComputerProgramming
        } else
            if (Goup == "AI") {
                return links.AI
            }
}


function openLink(links,topic){
        console.log(links[topic].url);
    return links[topic].url;
}


function back(){

    window.location.href = `./home.html`;
}



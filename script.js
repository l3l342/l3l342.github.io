//written by Ben D. (not cleanest code sry)

// useable commands in termianl
var x = window.matchMedia("(max-width: 750px)")
viewalert(x);
x.addEventListener("change", function() {
    viewalert(x);
});

const commands = {    
    help() {
        term.echo(`Available commands: ${help}`);

    }, 
    echo(...args) {
        term.echo(args.join(' '));
    }, 
    time () {
        term.echo('13:12 its always 13:12');
    },
    about() {
        term.echo('\nHello my Name is Ben and im a Software Developer from Germany :)\nIm 19 years old and live near Hamburg, Germany. I like to see new places and learn new things.\n\nRecently i graduated from high school and in the moment i try to do things that \nseem important to me. For example supporting my familie with cooking or working to get some money to see the world. \n\nOn this page you will see almost only my it background, thatswhy i \nwill tell you now my interests besides It: \nI really like to play Video games (Valorant, Minecraft Csgo), i also \nreally like to cook (my family and friends also like :) ). Furthermore im a very \nsocial person, thats why i like to have people around me and hang out. Maybe thats why my family and friend say i get along with everybody.\n\nTo see a more IT about page you can type [[;white;]"skills"] to see a overview of my skills');
    },
    hello() {
        term.echo(greetings);
    },
    projects() {
        term.echo('\n [[;white;]My projects]:\n +++ please check out my [[!;;;;https://github.com/l3l342]Github] for all projects +++\n +++ or type [[;white;]"skills"] to see a overview of my skills +++ \n\n 🔫 [[!;;;;https://github.com/l3l342/Better-Buff ]Better Buff] 🔫\nBetter Buff is a Windows-App where you can compare csgo item prices on different \nwebsites. The websites buff, skinport and steam will be compared. The application is written in python and uses the library of customtkinter. Feel free to download and try, but read carefull the instructions on github :) \n\n 📰 [[!;;;;https://github.com/l3l342]Newspage] 📰\nFor a school project i created a Newspaper website for an imaginary publisher. It was one of my first projects and i learned very much about html, css and js with this project. Feel free to [[!;;;;https://github.com/l3l342]visit]\n\n 🌎 [[!;;;;https://github.com/l3l342/IP-Geolocation-Map]Ip geolocation mapper] 🌎\nView where ur internet traffic is going. You can see on an interactive map where the servers your PC interacts with are located.');
    },
    connect(){
        term.echo('\n [[;white;]Connect with me]:\n 📧 E-mail: ben.drtt[a.t]protonmail.com or write "mail" 📧 \n 👾 Github: https://github.com/l3l342/ 👾 \n 🎸 Soundcloud: https://on.soundcloud.com/TofwycUwUog5uSFD8 🎸\n');
    },
    mail(){
        const mail = "ben.drtt[at]protonamil.com".replace("[at]", "@");
        window.location.href = `mailto:${mail}?subject=Subject&body=message%20goes%20here`;;
    },
    skills(){
        term.echo(' [[;white;]Languages]:\n 🇩🇪 German - native speaker 🇩🇪\n 🇬🇧 English - B2 level 🇬🇧\n\n [[;white;]Programming Languages]:\n 🐍 Python - high-level 🐍 \n ☕  javascript - decent-level ☕️ \n 💻 C - intermediate-level 💻 \n 👾 C++, C# - basic-level 👾\n\n [[;white;]Other]:\n 📝 html/css - decent-level 📝\n 🌎 basic understanding of networks and computer systems 🌎\n 💿 academic knowledge of Databases 💿\n 🧮 very good knowledge of programming concepts and algorithms 🧮')
    },
    test(){
        term.echo('[[;white;]world]')
    }
};

//greeting slogan
const greetings='\r\n                            )      (      (\r\n                           (        ))     )\r\n                    )       )      \/\/     (\r\n               _   (        __    (     ~->>\r\n        ,-----\' |__,_~~___<\'__`)-~__--__-~->> <\r\n        | \/\/  : | -__   ~__ o)____)),__ - \'> >-  >\r\n        | \/\/  : |- \\_ \\ -\\_\\ -\\ \\ \\ ~\\_  \\ ->> - ,  >>\r\n        | \/\/  : |_~_\\ -\\__\\ \\~\'\\ \\ \\, \\__ . -<-  >>\r\n        `-----._| `  -__`-- - ~~ -- ` --~> >\r\n         _\/___\\_    \/\/)_`\/\/  | ||]\r\n   _____[_______]_[~~-_ (.L_\/  ||\r\n  [____________________]\' `\\_,\/\'\/\r\n    ||| \/          |||  ,___,\'.\/\r\n    ||| \\          |||,\'______|\r\n    ||| \/          \/|| I==||\r\n    ||| \\       __\/_||  __||__\r\n-----||-\/------`-._\/||-o--o---o---\r\n  ~~~~~\'\r\nFor help type \'help\' in the terminal :)'

function prompt() {
    return (`[[;yellow;]guest[[;white;]@]127.0.0.1] [[;blue;]~] [[;yellow;]%] `);
}

//initalize terminal and settings
const term = $('.term').terminal(commands, {
    greetings,
    checkArity: false,
    exit: false,
    completion: true,
    prompt
});

//command list after help
const help = '\n\n general:\n hello - welcome screen\n clear - clear terminal output\n echo - print whats after echo\n help - you know what this does\n time - the time\n\n personal\n about - few things about me :)\n projects - my projects\n contact - how to contact me\n'

// make the text clickable
document.getElementById('about').addEventListener("click", function() {
    const command = $(this).text().trim();
    term.exec(command, {typing:true})
});

document.getElementById('connect').addEventListener("click", function() {
    const command = $(this).text().trim();
    term.exec(command, {typing:true})
});

document.getElementById('help').addEventListener("click", function() {
    const command = $(this).text().trim();
    term.exec(command, {typing:true})
});

document.getElementById('projects').addEventListener("click", function() {
    const command = $(this).text().trim();
    term.exec(command, {typing:true})
});

function viewalert(x) {
    if (x.matches)  {
        alert('Hello, this website is designed for desktop browsers. We detect that you using an mobile browser, thatswhy the website will not look great. If you can, come back later on a desktop device')
    }
}
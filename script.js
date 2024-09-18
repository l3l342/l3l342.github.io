//written by Ben D. (not cleanest code sry)

// useable commands in termianl
const checker = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };
const check = checker();
console.log(check);
  if (check === true) {
    alert('Hello, this website is designed for desktop browsers. We detect that you using a mobile browser, therefore the website will not look great. If you can, come back later on a desktop device'); 
  }

const mail = "ben.drtt[at]protonamil.com".replace("[at]", "@");
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
        term.echo('\nHello my Name is Ben and im a Software Developer from Germany :)\nIm 19 years old and live near Hamburg, Germany. I like to see new places and learn new things.\n\nRecently I graduated from high school and in the moment I try to do things that \nseem important to me. For example supporting my family with cooking or working to get some money to see the world. \n\nOn this page you will see almost only my IT background, thats why I \nwill tell you now my interests besides IT: \nI really like to play Video games (Valorant, Minecraft, Csgo). \nCooking is one of my favourite Hobbies, my family and friends can approve of my \nfood :). Furthermore Im a very social person, thats why I like to have people \naround me and hang out. Maybe thats why my family and friends say I get along with everybody.\n\nTo see a more IT about page you can type [[;white;]"skills"] to see a overview of my skills');
    },
    hello() {
        term.echo(greetings);
    },
    projects() {
        term.echo('\n [[;white;]My projects]:\n +++ please check out my [[!;;;;https://github.com/l3l342]Github] for all projects +++\n +++ or type [[;white;]"skills"] to see a overview of my skills +++ \n\n 🔫 [[!;;;;https://github.com/l3l342/Better-Buff ]Better Buff] 🔫\nBetter Buff is a Windows-App where you can compare csgo item prices on different \nwebsites. The websites buff, skinport and steam will be compared. The application is written in python and uses the library of customtkinter. Feel free to download and try, but read the instructions carefully on github :) \n\n 📰 [[!;;;;https://github.com/l3l342]Newspage] 📰\nFor a school project I created a Newspaper website for an imaginary publisher. It was one of my first projects and I learned very much about html, css and js. Feel free to [[!;;;;https://github.com/l3l342]visit]\n\n 🌎 [[!;;;;https://github.com/l3l342/IP-Geolocation-Map]Ip geolocation mapper] 🌎\nView where your internet traffic is going. You can see on an interactive map where the servers that your PC interacts with are located.');
    },
    connect(){
        term.echo(`\n [[;white;]Connect with me]:\n 📧 E-mail - [[!;;;;mailto:${mail}?subject=Subject&body=message%20goes%20here]ben.drtt(at)protonmail.com] or type [[;white;]"mail"] 📧 \n 👾 Github - https://github.com/l3l342/ 👾 \n 🎸 Soundcloud - https://on.soundcloud.com/TofwycUwUog5uSFD8 🎸\n`);
    },
    mail(){
        window.location.href = `mailto:${mail}?subject=Subject&body=message%20goes%20here`;;
    },
    skills(){
        term.echo(' [[;white;]Languages]:\n 🇩🇪 German - native speaker 🇩🇪\n 🇬🇧 English - B2 level 🇬🇧\n\n [[;white;]Programming Languages]:\n 🐍 Python - high-level 🐍 \n ☕  javascript - decent-level ☕️ \n 💻 C - intermediate-level 💻 \n 👾 C++, C# - basic-level 👾\n\n [[;white;]Other]:\n 📝 html/css - decent-level 📝\n 🌎 basic understanding of networks and computer systems 🌎\n 💿 academic knowledge of databases 💿\n 🧮 very good knowledge of programming concepts and algorithms 🧮')
    },
    test(){
        term.echo('[[;white;]hello world]')
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
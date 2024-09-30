var qdata = `#수업 시간에 메모한 시험 범위를 잃어버렸다! 나는
E같이 수업을 듣는 친구들에게 물어본다.
I학교 페이지에 들어가 시험 범위를 찾아본다.
#중요한 결정을 내릴 때 나는?
T여러가지 사실을 분석해서 결정한다.
F주변 사람들의 마음을 고려하여 결정한다.
#친구와 대화를 할 때 나는?
N깊고 의미 있는 대화를 더 선호한다.
S가볍고 현실적인 이야기를 주로 나눈다.
#스트레스를 받을 때 나는?
I혼자 시간을 보내며 차분하게 문제를 해결한다.
E주변 사람들과 이야기를 나누고 해결책을 찾는다.
#일상에서 나는?
J구체적인 계획을 세우고 움직인다.
P상황에 맞춰 유연하게 대처한다.
#갈등 상황에서 나는?
F상대방의 감정을 먼저 고려하며 문제를 해결한다.
T문제의 본질을 해결하려고 논리적으로 접근한다.
#일을 하다가 작지만 아리송한 부분이 생겼을 때
J시간이 걸려도 도움을 청한다.
P일단 할 수 있는 대로 하고 넘어간다.
#늦은 시간,영화 한편만 보고 자려했는데 잠이 안온다. 나는
P한편 더 보고 자면 된다.
J그래도 내일 일정이 있으니 억지로라도 자야한다.
#나는 일을 할 때
J나만의 계획을 세우고 그대로 실행한다.
P일단 눈 앞에 보이는 일 먼저 처리한다.
#드라마나 소설을 볼 때 나는?
T일어난 사건들을 중심으로 본다.
F내가 인물에게 몰입해 공감하며 본다.
#갑자기 친구가 다른 친구와 생긴 문제를 이야기한다. 우선
T어쩌다 문제가 생겼는지 알아낸다.
F친구의 기분을 먼저 풀어준다.
#고급 레스토랑에서 맛있는 음식을 먹고난 뒤 나는?
T아무리 맛있어도 비싸서 별로인 것 같다.
F좀 비싸도 맛있으니까 만족이다.`;

var rdata = `-남을 가르치거나 영감을 주는 일에 큰 보람을 느껴요. 하지만 문제를 해결해주고자 하는 마음이 커서 오지랖을 부릴때가 많아요.
-감수성이 풍부하고 긍정적이지만 해야할 말은 하는 스타일이에요.
-의외로 감정적인 면이 있어 기분 변화가 큰 편이에요.
-카리스마 있고 진실된 이야기를 하는 모습의 리더 기질을 가지고 있어요.
-해결하지 못할 문제도 해결하려 하고 거절을 잘 못하는 성격때문에 힘들어질 때가 많아요.
-많은 사람들과 두루두루 친해지는 것을 좋아하며 관계를 유지하기위해 꾸준히 노력해요.`;

var hdata = `ENTJ#ISFP#ISFJ
ENTP#ISFJ#ISFP
INTJ#ESFP#ESFJ
INTP#ESFJ#ESFP
ESTJ#INFP#INFJ
ESFJ#INTP#INTJ
ISTJ#ENFP#ENFJ
ISFJ#ENTP#ENTJ
ENFJ#ISTP#ISTJ
ENFP#ISTJ#ISTP
INFJ#ESTP#ESTJ
INFP#ESTJ#ESTP
ESTP#INFJ#INFP
ESFP#INTJ#INTP
ISTP#ENFJ#ENFP
ISFP#ENTJ#ENTP`;

var pdata =  `ISTJ#모세#나는책임감있는자
ISFJ#요셉#나는헌신적인자
INFJ#예레미야#나는비전을추구하는자
INTJ#다니엘#나는전략적인사람
ISTP#느헤미야#나는문제해결자
ISFP#다윗#나는감정을중시하는자
INFP#요한#나는이상적인사람
INTP#에녹#나는진리를탐구하는자
ESTP#라합#나는행동하는자
ESFP#막달라마리아#나는열정적인사람
ENFP#드보라#나는격려하는자
ENTP#룻#나는모험을추구하는자
ESTJ#여호수아#나는결단력있는리더
ESFJ#마르다#나는따뜻한섬김자
ENFJ#에스더#나는사람을이끄는자
ENTJ#한나#나는결단력있는사람`;


function loadFile(filePath) {
  var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "datas/"+filePath, false);
    var allText="";
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    return allText;
}

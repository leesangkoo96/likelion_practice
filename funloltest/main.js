var num = 1;
        // 객체(문제별 문제정보)
        var q={
            1: {"title" : "5인 집합금지 때문에 연말에 잡아둔 약속들이 줄줄이 취소되고 있다. 그로 인해 집에서 보내는 시간이 많아졌는데 무엇을 하면서 시간을 보내야할까?", 
            "type" : "EI", 
            "A" : "집에만 있을 생각하니까 답답하다!<br> 꿩대신 닭 느낌으로 친구들과 화상채팅으로 비대면 파티를 연다.", 
            "B" : "집콕? 오히려 좋아.<br> 집에서 조용히 읽고 싶었던 책이나 하고 싶었던 것들을 하면서 시간을 보낸다. "},

            2: {"title" : "내일은 내가 가장 좋아하는 야구팀이 경기하는 날이다. 친구가 입장권이 생겼다면서 표를 보여주는데 원하는 자리를 고를 수 있다! 나는 어떤 자리를 고를 것인가?", 
            "type" : "EI", 
            "A" : "야구는 여러 사람들과 함께 응원하는 맛이지!<br> 응원석을 골라 신나게 사람들과 응원하며 즐긴다.", 
            "B" : "야구는 경기 자체에 집중해야하지!<br> 테이블석을 골라 차분히 야구 경기를 즐긴다."},

            3: {"title" : "치열하게 하루를 살아가던 어느 날, 뜻밖의 휴가가 생겼다. 나는 이 휴가를 어떻게 보낼 것인가?",
            "type" : "EI", 
            "A" : "친구들을 불러 모아 신나게 놀면서 그 동안 있었던 스트레스를 날려버린다.", 
            "B" : "조용한 카페에 가서 여유를 만끽하거나 진짜 친한 친구만 불러 소소하게 여유를 즐긴다."},

            4: {"title" : "약속시간에 생각보다 빨리 도착해서 시간이 남는다. 다 떨어진 크림이 생각나서 근처 올리브O에 들어가서 찾고 있는데 새로 나온 크림이 50%나 세일중이다. 이 때, 나의 반응은?", 
            "type" : "SN", 
            "A" : "50% 세일이 눈에 밟히긴 하지만 나랑 안 맞을지도 모르는 크림을 덥석 구매할 수는 없지. 일단 내려두고 나중에 검색을 통해 충분히 알아보고 구매한다.", 
            "B" : "50% 세일이라니 이 크림은 나한테 잘 맞을 거야! 일단 구매하고 본다."},

            5: {"title" : "처음으로 친구들과 차이나타운에 놀러왔다. 그런데 식당들이 너무 많아서 고르기 힘들다. 나는 어떻게 식당을 고를 것인가?", 
            "type" : "SN", 
            "A" : "검색하면 다 나와!<br> 리뷰를 통해 그 중에서도 맛있다고 소문난 집을 검색해서 들어간다.", 
            "B" : "이 집이 딱 봐도 맛있어 보이는 집이구만!<br> 나만의 맛집 고르기 노하우로 선택해서 들어간다."},

            6: {"title" : "나는 100억의 자본을 가지고 있는 투자자다. 이번에 새로 투자할 기업을 찾고 있는데 두 기업에서 투자를 해달라고 찾아왔다. 어느 기업에 투자해야 할까?", 
            "type" : "SN", 
            "A" : "경영진도 능력이 검증된 사람들이고<br> 앞으로 안정적으로 꾸준히 성장할 것이라는 자료가 뒷받침되어 있는 기업 “샘숭”.", 
            "B" : "비록 아직은 스타트업 규모이고, 불안한 경영구조를 보이고 있지만<br> 앞으로의 미래가 기대되는 무한한 잠재력을 가진 기업<br>“테-슬라임”."},

            7: {"title" : "친구가 극심한 스트레스로 이직에 대한 고민을 하고 있다! 친구의 고민에 있어 나의 반응은?", 
            "type" : "TF", 
            "A" : "그럼 이렇게 해보는 건 어때?라고 물어보며<br>고민들에 대해 분석적으로 살펴보고 다양한 의견을 준다.", 
            "B" : "아 진짜? 그런 고민을 왜 혼자하고 있어! 그동안 많이 힘들었지.. 라고<br>위로하며 공감해준다."},

            8: {"title" : "친구가 운전하다가 교통사고를 당했다고 연락이 왔다. 이 때 나의 반응은?", 
            "type" : "TF", 
            "A" : "너는 안 다쳤어? 어쩌다가 사고가 났는데? 라고 물어보며<br>사고의 전후사정을 들어보고 추후 조치에 대해 조언해준다.", 
            "B" : "너는 안다쳤어? 많이 놀랬지.. 라고 말하며<br> 사고로 놀란 친구를 달래주고 진정시켜준다."},

            9: {"title" : "올 한 해를 마무리하면서 고생해준 팀원들에게 개인적으로 감사인사를 하고 싶다. 하지만 예산은 한정되어 있는데... 어떻게 팀원들을 위한 선물을 준비할 것인가?", 
            "type" : "TF", 
            "A" : "적당하고 비슷한 가격대의 선물을 골라 팀원 모두에게 선물한다.",
            "B" : "가장 고마웠었던 팀원 몇 명에게만 조용히 편지와 선물을 준비한다."},

            10: {"title" : "수업이 끝나고 교수님이 개인발표 과제를 내주셨다. 나는 과제를 어떻게 해나가는 스타일인가?", 
            "type" : "JP", 
            "A" : "일단 계획부터 세우자!<br>리스트를 적어 해야 할 일들과 마감기한을 정해서 하나씩 해치워 나간다.", 
            "B" : "일단 자료조사부터 끝내자!<br>일단 시작하고 난 뒤에 상황에 따라 해야 할 일들을 해나간다."},

            11: {"title" : "연초에는 정말 새로운 사람이 되고 싶다. 계획을 세워야겠는데... 연초 계획을 세울 때 나의 스타일은?", 
            "type" : "JP", 
            "A" : "올해는 꼭 이루고 말겠어!!<br> 현실적으로 이룰 수 있는 계획들을 세운다.", 
            "B" : "자고로 계획이란 크면 클수록 좋은 법!<br> 일단 크게 계획을 세우고 나중에 수정해나간다."},

            12: {"title" : "2021년 나의 목표는 자기개발! 나는 어떻게 자기개발 하는 스타일인가?", 
            "type" : "JP", 
            "A" : "기초부터 차근차근 배워서 성장해나가고 싶어!<br> 커리큘럼을 보고 꼼꼼하게 공부계획을 세워서 수강한다.", 
            "B" : "일단 들어봐야 내가 어떤 유형에 맞는지 알지!<br> 먼저 듣고 싶었던 강의의 맛보기 강의를 들어본다."}
        }
        //객체(MBTI결과를 키로 그에 해당하는 동물과 설명출력)
        var result={

            "ISTJ":{
                "MBTI": "- ISTJ -", 
                "champ": "가렌", 
                "nickname": "데마시아의 힘", 
                "explain": '"가렌은 불굴의 선봉대를 이끄는 고결하고 자긍심 강한 전사다.<br> 선봉대 내에서 인망이 두터울 뿐 아니라 심지어 적에게도 존경을 받지만,<br> 그가 대대로 데마시아와 데마시아의 이상을 수호하는 임무를 맡은<br> 크라운가드 가문의 자손이기 때문은 아니다.<br> 가렌은 마법 저항력을 갖춘 방어구와 거대한 대검으로 무장하고,<br> 언제라도 마법사에 맞서 정당한 검으로<br> 진정한 칼바람을 일으킬 준비가 되어 있다."', 
                "lines": '" 내 검과 심장은 데마시아의 것이다! "',
                "img":"champion/new/가렌.jpg",
                "head_m_explain": "ISTJ",
                "head_m_explain2": "청렴결백한 논리주의자",
                "head_m_explain3": "한 번 시작한 일은 끝까지 해내는 사람들",
                "m_explain": "당신은 신중하고 조용하며 집중력이 강하고 매사에 철저하며 사리분별력이 뛰어난 분이시군요.<br>ISTJ 유형은 실제 사실에 대하여 정확하고 체계적으로 기억하며 일 처리에 있어서도 신중하며 책임감이 강한 경향이 있답니다!<br>그리고 집중력이 높으며 강한 현실감각을 바탕으로 실질적이고 조직적으로 일을 처리하며 직무가 요구하는 그 이상으로 일을 생각하곤 합니다.<br><br>그렇기에 어지간한 위기 상태에서도 침착하게 보이며 충동적으로 일을 처리하지 않고 일관성 있고 보수적인 입장을 취하는 경향이 있군요?!<br>또한, 문제를 해결할 때, 과거의 경험을 잘 적용하며 반복되는 일상적인 일에 대한 인내력이 강하다는 특징도 있죠.<br><br>주의해야할 점으로는 세부적이고 현재의 일상적인 것들을 중요시하기 때문에 장기적인 안목이 부족할 수 있습니다. 그렇기에 가끔씩은 장기적인 안목을 기르기 위해 노력을 기울이는 것이 좋을 수도 있겠네요! 그리고 대인관계의 섬세함을 무시하기 쉬우므로 자신과 타인의 감정에 민감할 필요가 있습니다. <br>",
                "img_2":"champion/basic/신짜오.jpg",
                "img_3":"champion/basic/케이틀린.jpg",
                "img_4":"champion/basic/쉔.jpg"
            },

            "ISTP":{
                "MBTI": "- ISTP -", 
                "champ": "카르마", 
                "nickname": "깨우친 자", 
                "explain": '"아이오니아의 영적인 전통을 카르마보다 잘 나타내는 필멸자가 있을까.<br> 지난 시간 동안 축적된 기억을 새로운 생명으로 온존하며 수없이 부활한 고대 영혼의 살아있는 현신으로,<br> 극소수만이 깨우칠 수 있는 힘을 손에 넣었다.<br> 최근 위기가 닥쳤을 때 최선을 다해 자신을 따르는 이들을 이끈 카르마는<br> 자신과 자신이 그토록 아끼는 조국 모두가 상당한 대가를 치러야만<br> 평화와 조화가 찾아오리라는 것을 알고 있다."', 
                "lines": '" 우린 반드시 결정을 내려야 합니다. . . "',
                "img":"champion/new/카르마.jpg",
                "head_m_explain": "ISTP",
                "head_m_explain2": "백과사전형",
                "head_m_explain3": "논리적이고 뛰어난 상황 적응력을 가지고 있는 사람들",
                "m_explain": "당신은 조용하고 과묵하고 절제된 호기심으로 인생을 관찰하며 상황을 파악하는 민감성과 도구를 다루는 뛰어난 능력을 가지고 계신 분이시군요.<br><br>ISTP 유형은 말이 없으며, 논리적이고 분석적이며 객관적으로 인생을 관찰하는 유형으로 널리 알려져 있습니다. 그래서 뚜렷한 사실에 기초를 둔 객관적 추론을 제외한 어떠한 것에 의해서도 확신을 가지지 않는 경향이 있습니다. 열정적이지만 조용하고 호기심이 많으며, 사람을 사귈 때 친한 친구들을 제외하고는 수줍어하는 경향이 있으며 외부상황을 잊을 만큼 그들의 관심거리에 종종 깊이 빠져드는 경향이 있습니다.<br><br>주의해야할 점으로는 일을 처리함에 있어 임의대로 지름길을 선택함으로써 가장 쉬운 방식을 택하고 자신의 노력을 게을리 할 때 문제가 생길 수 있으므로 한 단계씩 계획을 세우고, 그 계획을 완성시키기 위해 노력하며 인내심을 가지고 그 계획을 지켜나가는 것이 중요하겠습니다. 또한, 자신의 노력을 굳이 드러내지 않는 스타일이라 때때로는 자신의 노력을 다른 사람들이 알아주는지를 확인하고 알리는 일 또한 필요하겠습니다. 마지막으로 살짝 충동적인 경향이 있기 때문에 어떠한 일을 결정하기 전에 모든 측면을 숙고하고 고려할 시간 여유를 가질 필요가 있겠습니다.<br>",
                "img_2":"champion/basic/마스터이.jpg",
                "img_3":"champion/basic/이렐리아.jpg",
                "img_4":"champion/basic/말자하.jpg"
            },

            "ESTP":{
                "MBTI": "- ESTP -", 
                "champ": "그라가스", 
                "nickname": "술취한 난동꾼", 
                "explain": '"그라가스는 한 번 보면 잊기 힘든 쾌활한 주조가로, 완벽한 술을 만들기 위한 여정을 떠나게 되었다.<br> 그라가스가 어디서 왔는지는 아무도 모르지만,<br> 프렐요드의 때묻지 않은 불모지를 뒤지며 희귀한 재료를 찾아 주조법을 하나씩 시험해 보고 있다.<br>대부분 술에 취해 있어 극도로 충동적인 그라가스는 소동을 일으키는 데에는 전설적인 소질이 있는데,<br> 그 소동은 밤샘 파티와 엄청난 기물 파손으로 이어지기 일쑤다.<br> 그라가스를 보게 된다면 곧 음주, 그리고 파괴가 잇따를 것이라고 생각해도 좋다!"', 
                "lines": '" 네가 사는 거라면 나도 끼지~ "',
                "img":"champion/new/그라가스.jpg",
                "head_m_explain": "ESTP",
                "head_m_explain2": "에너지 넘치는 활동가",
                "head_m_explain3": "친구, 운동, 음식 등 다양한 활동을 선호하는 사람들",
                "m_explain": "당신은 현실적인 문제에 해결사 역할을 하고 적응력이 뛰어나며 관용적인 사람이군요!<br><br>ESTP 유형은 친구, 운동, 음식 등 다양한 활동을 선호하고 개방적이며, 다른 사람에게 관대하고 선입관이 적은 성향으로 알려져 있습니다. 그래서 그런지 어떤 사람이나 사건에 대해서 별로 선입관을 갖지 않는 편이며, 일을 있는 그대로 보고 받아들이는 경향이 있습니다.<br>성별에 상관없이 모두 행동파이며 이들이 있는 곳에서는 반드시 사건이 일어나기 마련입니다!<br>그렇기에 ESTP 유형의 주변 생활은 지루할 리가 만무한데, 일상적이고 평범한 것들도 극적인 미사어구로 흥미진진하게 만드는 능력이 있습니다.<br><br>주의해야할 점으로는 비상상태와 같이 혼란을 가져올 수 있는 상황에도 임기응변이나 순간적인 기지를 지나치게 신뢰하고, 벼락치기 스타일이라 일의 마지막 순간에 다른 사람을 재촉하는 경향이 있습니다. 그렇기에 자신의 순간적인 임기응변식의 행동으로 인해 생길 더 많은 파급 효과들을 신중하게 생각하고 사전에 충분한 계획을 통해 행동할 필요가 있습니다.<br>",
                "img_2":"champion/basic/트리스타나.jpg",
                "img_3":"champion/basic/나르.jpg",
                "img_4":"champion/basic/누누와월럼프.jpg"
            },

            "ESTJ":{
                "MBTI": "- ESTJ -", 
                "champ": "세트", 
                "nickname": "우두머리", 
                "explain": '"점점 세력을 더해 가는 아이오니아 범죄 세계의 우두머리 세트는<br> 녹서스와의 전쟁이 끝남과 동시에 두각을 드러내기 시작했다.<br> 나보리 투기장의 신인 투사로 등장한 그는<br> 무지막지한 힘과 상상을 초월하는 맷집으로 금세 유명인사가 되었고,<br> 동네 싸움꾼에서 한때 그가 싸웠던 투기장을 지배하는 정상의 자리까지 올라섰다."', 
                "lines": '" 난. . . 최강이다 "',
                "img":"champion/new/세트.jpg",
                "head_m_explain": "ESTJ",
                "head_m_explain2": "엄격한 관리자",
                "head_m_explain3": "사무적, 실용적, 현실적으로 일을 많이 하는 사람들",
                "m_explain": "당신은 구체적이고 현실적이며 어떠한 일을 조직화하고 주도해 나가는 지도력이 있는 사람이군요.<br><br>ESTJ 유형은 실질적이고 현실감각이 뛰어나며 일을 조직하고 계획하여 추진시키는 능력이 있답니다! 친구들과 함께하는 여행이나 회식 자리 등에서 총무 업무를 도맡아서 하고, 분위기 메이커라는 평가를 많이 받지만 너무 시끄럽다는 소리도 많이 듣고는 할 것입니다.<br>또한, 종종 타인의 평가를 하고는 하는데 그 기준은 얼마나 남들이 규정과 절차에 따라서 일을 하는지를 보고 판단하는 경향이 있습니다.<br><br>주의해야할 점으로는 일이 어떻게 행해져야 할지에 대한 의견을 너무 빨리 세우고 결정함으로써 오히려 문제가 발생하는 경우가 있습니다. 그렇기에 ‘주어진 일’이나 ‘하도록 해야만 하는 일’이 상황의 변화에 따라 새로운 상황에 맞지 않을 수 도 있다는 것을 인식할 필요가 있습니다. 또한, 다른 사람들에게 조언을 구하고 자신의 말을 멈추고 그들의 의견을 귀 기울여 듣고 판단을 천천히 내림으로써 자신의 감정의 가치를 인정하고 확인할 시간 여유를 가질 필요가 있습니다.<br>",
                "img_2":"champion/basic/브라움.jpg",
                "img_3":"champion/basic/키아나.jpg",
                "img_4":"champion/basic/드레이븐.jpg"
            },

            "ISFJ":{
                "MBTI": "- ISFJ -", 
                "champ": "갈리오", 
                "nickname": "위대한 석상", 
                "explain": '"아스라한 빛의 도시 데마시아의 성문 밖, 거대한 석상 갈리오가 경계의 눈을 늦추지 않고 서 있다.<br>마법사의 공격으로부터 데마시아를 수호하기 위해 만들어진 갈리오는<br> 강력한 마법의 힘이 그를 깨울 때까지 수십 년, 때로는 수백 년 동안 한자리에 미동도 없이 서있다.<br> 일단 깨어나면 전투의 아찔한 스릴과 데마시아인들을 구한다는 자부심을 음미하며 1분 1초도 허투루 쓰는 법이 없다.<br>그러나 그가 쟁취한 승리의 향기는 결코 달콤하지만은 않다.<br>아이러니하게도 그가 물리친 마법의 힘이 그에게 생명을 준 원천이기에<br> 전쟁을 승리로 장식한 후에는 다시 깊은 잠으로 빠져든다. . ."', 
                "lines": '" 힘을 발휘할 시간이군. . . "',
                "img":"champion/new/갈리오.jpg",
                "head_m_explain": "ISFJ",
                "head_m_explain2": "용감한 수호자",
                "head_m_explain3": "성실하고 완화하며 협조를 잘하는 사람들",
                "m_explain": "당신은 조용하고 차분하며 성실하고 책임감이 강한 사람이군요.<br><br>ISFJ 유형은 성실하고 책임감이 강하여 치밀함과 반복을 요하는 일을 끝까지 해 나가는 인내력이 강한편입니다. 그래서 이들이 가진 침착성과 인내력은 가정이나 해당 유형이 포함된 집단에 안정성을 가져다주는 편입니다. 그리고 자신과 타인의 감정의 흐름에 민감하여 다른 사람의 사정을 무심코 지나치기 힘들어하며 상대에게 상처를 주는 일이 드물어 대인관계가 원만한편이고 신중하고 생각이 많은 경향을 보입니다. 또한 평소에 배려와 겸손, 예의를 중요시 하는 경향을 보여 현대판 선비 유형이라고 불리기도 합니다. <br><br>주의해야할 점으로는 너무 현실적인 것에만 매달려서 사실의 이면이나 내포된 의미를 찾는 것을 소홀히 할 경우에 생각지도 못한 문제가 발생하는 경향이 있습니다. 또한, 현실을 너무나 직시하는 바람에 미래의 가능성을 보지 못하고 지나치는 경우가 많습니다.<br>그렇기에 좀 더 실제적이고 사실적인 일에 주안점을 둘 필요가 있고 미래에 대한 잠재력을 나타낼 수 있는 현재 상황에 대해 적어도 세 가지 이상의 가능성이 있다는 것을 항상 염두에 둘 필요가 있습니다.<br>",
                "img_2":"champion/basic/소라카.jpg",
                "img_3":"champion/basic/잔나.jpg",
                "img_4":"champion/basic/나미.jpg"
            },

            "ISFP":{
                "MBTI": "- ISFP -", 
                "cha mp": "소나", 
                "nickname": "현의 명인", 
                "explain": '"소나는 말을 하지 못하며 오로지 우아한 화음과 심금을 울리는 아리아로만 의사를 표현한다.<br>특유의 고상한 몸가짐 때문에 데마시아 상류층의 사랑을 받지만,<br>듣는 이의 마음을 사로잡는 소나의 선율이 실제로 마법이 아닌가 의심하는 사람들도 많다.<br>알다시피 마법은 데마시아에서 금기시되고 있기 때문이다.<br> 소나는 낯선 이들에게 침묵을 지키지만, 가까운 지인들은 그녀의 의사를 어느 정도 이해한다.<br>소나가 연주하는 화음은 아군의 상처를 어루만질 뿐 아니라 방심하고 있는 적을 공격하기도 한다. . .', 
                "lines": '" 오늘은 어떤 명작을 연주해볼까요? "',
                "img":"champion/new/소나.jpg",
                "head_m_explain": "ISFP",
                "head_m_explain2": "호기심 많은 예술가",
                "head_m_explain3": "따뜻한 감성을 가지고 있는 겸손한 사람들",
                "m_explain": "당신은 말없이 다정하고 온화하며 털옷을 입은 것처럼 따뜻한 속마음을 가진 사람이군요.<br><br>ISFP 유형은 겸손하고 적응력과 관용성이 많으며, 보통 현재의 삶을 즐기려는 경향이 있고, 따뜻한 감성을 지니고 있어서 동정심이 강한편이라고 널리 알려져 있습니다. 그렇기 때문에, 기분 나쁜 일에 대한 표현을 못하는 경우가 종종 있으며 부정적인 반응을 보이기 어려워하는 성향이 있습니다. 그리고 감수성이 예민한 편이라 자연에 대한 사랑과 미적 감각, 균형 감각이 뛰어난 편입니다. 말보다는 행동으로 따뜻한 마음을 표현하는 편이며, 사람이나 일을 대하는데 있어서 자신들의 내적인 이상향과 개인적인 가치에 준하여 대하는 성향을 보입니다.<br><br>주의해야할 점으로는 보통 다른 사람의 욕구를 채우기 위해 움직이는 경우가 많기 때문에 정작 자신의 욕구는 뒤로 미루어 둔 채 손해를 보는 경우가 많습니다. 그렇기 때문에, 자신의 욕구를 좀 더 존중하는 방법을 알아야 합니다. 그러기 위해서는 자신을 돌보기 위해 다른 사람들의 도움이나 시간 등을 요청할 때에 좀 더 자신의 주장을 펼치는 방법과 표현하는 법을 연습해야 합니다. 그리고 무엇인가를 더 의심해보는 습관을 기르고 어떠한 정보를 그대로 받아들이기 보다는 분석하는 습관을 들일 필요가 있습니다. 그리고 자신의 재능을 남이 알아줄 때까지 기다리기 보다는 적극적으로 남에게 알려나가는 자세를 가지고 남에게 부정적인 피드백을 주는 것을 두려워하지 않는 연습을 할 필요가 있습니다.<br>",
                "img_2":"champion/basic/진.jpg",
                "img_3":"champion/basic/아펠리오스.jpg",
                "img_4":"champion/basic/아무무.jpg"
            },

            "ESFP":{
                "MBTI": "- ESFP -", 
                "champ": "직스", 
                "nickname": "마법공학 폭파병", 
                "explain": '"거대한 폭탄을 사랑하는 직스는 폭탄만큼이나 화끈한 성미를 지닌 요들이다.<br> 필트오버에서 어느 발명가를 돕는 조수로 일하다가,<br>반복되는 일상에 싫증을 느끼던 중 파란 머리의 미친 폭탄광 징크스와 친구가 되었다.<br>어느 날 필트오버에서 요란스러운 밤을 보낸 후, 직스는 징크스의 조언을 듣고 자운으로 향했다.<br>자운은 직스에게 천국이다!<br>제일 좋아하는 폭탄을 마음껏 터뜨리고 무엇이든 내키는 대로 폭발시키며,<br>자운 시민뿐 아니라 화공 남작들까지 공포에 질리게 만들고 있으니. . !"', 
                "lines": '" 뻥~이요! "',
                "img":"champion/new/직스.jpg",
                "head_m_explain": "ESFP",
                "head_m_explain2": "자유로운 영혼의 낙천주의자",
                "head_m_explain3": "분위기를 고조시키는 우호적인 사람들",
                "m_explain": "당신은 사교적이고 활동적이며 친절하고 낙천적인 사람이군요.<br><br>ESFP 유형은 분위기를 고조시키는 우호적이고 발랄한 성격을 가지는 경우가 많고 친절하고 현실적이며 운동을 비롯한 실생활을 즐기는 경향이 있습니다. 이들은 분위기가 가라앉는 것을 두고 보지 못하는 경우가 많고 대부분의 일을 긍정적으로 생각하며 낙천가인 경우가 많습니다. 그렇기에 삶 자체의 만족도가 높은 성향을 보이고 어떠한 상황에도 잘 적응하며 선입견이 없고 개방적이며 관용적이고 대부분의 사람들과 지내는데 큰 문제를 보이지 않습니다. 그리고 새로운 사건이나 물건에도 관심과 호기심이 많으며 다른 사람의 일이나 활동에 관심이 높기 때문에 주위에서 진행되고 있는 일들을 모두 알고자 하는 경향이 있습니다. 그리고 이론이나 책을 통해 배우기보다는 실생활이나 경험을 통해 배우는 것을 선호합니다.<br><br>주의해야할 점으로는 당면한 문제나 업무처리에 충분히 시간을 투자하지 못한 채, 너무 사교적인 일에만 시간을 보낼 때가 많아 문제가 생기는 경우가 많은 편입니다. 그렇기 때문에, 시간 관리에 노력을 기울일 필요가 있으며 무엇을 먼저 해야 하고 무엇이 더 중요한지 우선순위를 결정하는 연습과 광범위한 안목을 지닐 필요가 있습니다.<br>",
                "img_2":"champion/basic/징크스.jpg",
                "img_3":"champion/basic/조이.jpg",
                "img_4":"champion/basic/유미.jpg"
            },

            "ESFJ":{
                "MBTI": "- ESFJ -", 
                "champ": "럭스", 
                "nickname": "광명의 소녀", 
                "explain": '"럭스는 마법 능력을 가진 자를 공포와 의심을 담은 편협한 시선으로 보는 환경에서 태어났다.<br>고귀한 가문의 딸이지만 빛을 자유자재로 다루는 마법력을 타고났기에<br>이 능력이 발각되면 추방당할 것이라는 두려움을 안고 어린 시절을 보냈다.<br>자신의 능력을 감추는 것만이 가문의 명예를 지키는 방법이라고 여겼지만,<br>낙천적이고 유연한 성격 덕분에 차츰 자신만의 재능을 인정하고 받아들였고,<br>이제는 조국을 위해 마법을 은밀하게 사용하고 있다. . . !"', 
                "lines": '" 어디 한 번 길을 밝혀보죠! "',
                "img":"champion/new/럭스.jpg",
                "head_m_explain": "ESFJ",
                "head_m_explain2": "사교적인 외교관",
                "head_m_explain3": "친절과 현실감을 바탕으로 타인의 마음에 공감하는 사람들",
                "m_explain": "당신은 동정심이 많고 다른 사람에게 관심을 쏟고 인화를 중시하는 사람이군요.<br><br>ESFJ 유형은 타고난 협력자로서 다른 사람들에게 관심이 많고 친절함과 현실감을 바탕으로 타인에게 봉사하는 경향이 있습니다. 다른 사람들과 이야기 하는 것을 좋아하고 활발하며 계획을 잘 세우는 편입니다. 그러나 계획을 세우는 것만 좋아하고 그 계획에 맞추어서 실천하는 것은 싫어합니다. 그러면서 계획대로 실천 해나가는 것을 좋아하는 아리송한 유형이기도 합니다. 그들의 기쁨과 만족은 대부분 주위 사람들과 맺는 인간관계에서 오는 경우가 많은데 그렇기에 다른 사람들의 지지를 받으면 일에 열중하고 다른 사람들의 무관심한 태도에 민감한 경우가 많습니다. 대체로 존경이나 칭찬하는 것이라면 무엇이든지 이상적인 것으로 받아들이는 성향이 있습니다. 그들은 다른 사람들의 의견에 대한 가치를 발견하는데 재능이 있는 경우가 많은데 심지어 여러 의견들이 상호갈등을 일으킬 때도, 이들은 조화를 기할 수 있고 어느 정도 관리, 조정할 수 있을 것이라는 믿음을 가지고 실현해나갑니다.<br><br>주의해야할 점으로는 일의 순조로운 진행을 의식한 나머지 지나치게 조화를 추구하여 충돌이 두려워 숨겨진 문제의 해결을 피하려는 경향이 있습니다. 문제해결에 있어서 충돌을 통해 서로 이해하고 도울 수 있다는 것과, 정당한 평가를 내리는 방법을 연습하고 배울 필요가 있습니다. 타인으로부터의 실망을 두려워 말고 때로는 NO!라고 대답할 수 있는 단호함을 가질 필요가 있습니다. 그리고 타인이 진정으로 필요로 하고 원하는 것이 무엇인지를 진지하게 고민하고 들을 필요가 있으며 남을 즐겁게 하려는 욕망 때문에 자신의 업무를 소홀히 할 수 있으므로 주의가 필요합니다.<br>",
                "img_2":"champion/basic/케넨.jpg",
                "img_3":"champion/basic/니코.jpg",
                "img_4":"champion/basic/세라핀.jpg"
            },

            "INFJ":{
                "MBTI": "- INFJ -", 
                "champ": "라이즈", 
                "nickname": "룬 마법사", 
                "explain": '"라이즈는 산전수전을 겪으며 중차대한 임무를 수행하는 고대의 대마법사다.<br> 가공할 마력과 무한한 체력을 보유한 그는,<br>세계를 창조한 원초적 마법의 파편인 룬을 찾기 위해 쉴 틈 없이 이곳저곳을 떠돌고 있다.<br> 룬이 룬테라에 어떤 참사를 일으킬 수 있는지 알고 있기에<br> 라이즈는 룬이 잘못된 손에 들어가지 않도록 빠짐없이 찾아야만 한다. . ."<br><br>', 
                "lines":'" 가자고 어서 . . .! "',
                "img":"champion/new/라이즈.jpg",
                "head_m_explain": "ISFJ",
                "head_m_explain2": "이 시대의 예언자",
                "head_m_explain3": "통찰력과 직관력이 뛰어난 사람들",
                "m_explain": "당신은 대부분의 사항에 마땅한 근거를 논해야 하는 ‘합리적 성향’이 강한 분이시군요.  사람을 사귈 때는 상대방이 해당 분야에 대해 ‘유능한지’와 ‘객관적인지’를 먼저 헤아리려고 하는 경향이 있지 않으신가요? <br><br> INTJ 유형의 사람들은 주로 나무보다 숲을 먼저 보고 일을 처리하는 편이지만, 그 해결법 발상마저 근본적이고 엄밀하기로 유명하답니다! 이 탓에 예외 상황이나 반칙은 물론, 자기 분야(전공)에 대해 얕은 지식으로 잡담 떠는 걸 몹시 싫어하는 성격으로 알려져 있어요. 그 밖에 논리, 독립(혹은 독창성), 효율이라는 가치는 INFJ 유형에게 상당히 중요하기에, 학문을 좋아하며 수험에도 특화되어 있다고 알려져 있구요. 다만, 징험이나 방법론을 못 버리는 특성도 있으므로 아주 새로운 상황(신유형)이나 손쉬운 잡무에 유달리 취약한 모습을 보이는 갭모에적인 요소도 있죠. <br>",
                "img_2":"champion/basic/벨코즈.jpg",
                "img_3":"champion/basic/바드.jpg",
                "img_4":"champion/basic/아우렐리온솔.jpg"
            },
            
            "INFP":{
                "MBTI": "- INFP -", 
                "champ": "레오나", 
                "nickname": "여명의 방패", 
                "explain": '"솔라리 성전사 레오나는 천공의 검과 여명의 방패로 타곤 산을 수호한다. <br>레오나의 몸은 태양의 불길로 가득하며, 피부는 별의 광채로 빛나고,<br> 눈동자는 천체들의 기운으로 불타오른다.<br> 황금 갑주와 어마어마한 고대의 지식으로 무장한 레오나는 <br>어떤 이들에게는 깨우침을, 어떤 이들에게는 죽음을 선사한다."', 
                "lines": '" 새벽이 밝았습니다 . . . ! "',
                "img":"champion/new/레오나.jpg",
                "head_m_explain": "INFP",
                "head_m_explain2": "이상주의형",
                "head_m_explain3": "이상적인 세계를 만들어가는 사람들",
                "m_explain": "당신은 신중하고 조용하며 집중력이 강하고 매사에 철저하며 사리분별력이 뛰어난 분이시군요.<br>ISTJ 유형은 실제 사실에 대하여 정확하고 체계적으로 기억하며 일 처리에 있어서도 신중하며 책임감이 강한 경향이 있답니다!<br>그리고 집중력이 높으며 강한 현실감각을 바탕으로 실질적이고 조직적으로 일을 처리하며 직무가 요구하는 그 이상으로 일을 생각하곤 합니다.<br><br>그렇기에 어지간한 위기 상태에서도 침착하게 보이며 충동적으로 일을 처리하지 않고 일관성 있고 보수적인 입장을 취하는 경향이 있군요?!<br>또한, 문제를 해결할 때, 과거의 경험을 잘 적용하며 반복되는 일상적인 일에 대한 인내력이 강하다는 특징도 있죠.<br><br>주의해야할 점으로는 세부적이고 현재의 일상적인 것들을 중요시하기 때문에 장기적인 안목이 부족할 수 있습니다. 그렇기에 가끔씩은 장기적인 안목을 기르기 위해 노력을 기울이는 것이 좋을 수도 있겠네요! 그리고 대인관계의 섬세함을 무시하기 쉬우므로 자신과 타인의 감정에 민감할 필요가 있습니다.<br>",
                "img_2":"champion/basic/판테온.jpg",
                "img_3":"champion/basic/타릭.jpg",
                "img_4":"champion/basic/다이애나.jpg"
            },

            "ENFP":{
                "MBTI": "- ENFP -", 
                "champ": "이즈리얼", 
                "nickname": "무모한 탐험가", 
                "explain": '"마법에 타고난 재능을 가진 멋진 모험가 이즈리얼은 오래전에 사라진 지하 묘지를 탐험하고<br> 고대 저주에 맞서 싸우며 힘든 역경을 손쉽게 극복한다.<br>끝없는 용기와 무모함을 지닌 그는 어떠한 상황에서도 즉흥적으로 헤쳐나가는 것을 선호한다.<br>기지를 발휘할 때도 있지만,<br>대부분은 파괴적이고 불가사의한 폭발을 일으키는 슈리마의 신비한 장갑에 의지한다.<br>한 가지 분명한 사실은 이즈리얼이 가는 곳에 말썽이 있다는 것이다.<br> 혹은 바로 눈앞에 있거나, 사방에 있을지도 모른다. . . !"', 
                "lines": '" 내 솜씨를 제대로 보여줄 시간이군! "',
                "img":"champion/new/이즈리얼.jpg",
                "head_m_explain": "ENFP",
                "head_m_explain2": "재기발랄한 활동가",
                "head_m_explain3": "열정적으로 새로운 관계를 만드는 사람들",
                "m_explain": "당신은 따뜻하고 정열적이며, 활기가 넘치고 재능이 많으며 상상력이 풍부한 사람이군요.<br><br>ENFP 유형은 열정적이고 창의적이며 풍부한 상상력과 영감을 가지고 새로운 프로젝트를 잘 시작하는 경향이 있습니다. 즉흥적으로 일을 시작하고 재빠르게 해결하는 능력 또한 갖추고 있죠. 이들은 멀티태스킹에 능하고 계획을 세우기보다는 자신만의 스타일대로 일을 해나가는 것을 선호합니다. 또한 타인의 동기를 쉽게 알아채는 초인적 감각을 지니고 있는 경우가 많아서 이들이 타인에게 주는 영향력은 대단한편입니다. 예리한 통찰력을 가지고 있지만, 그들의 주의력은 수동적이거나 우연인 경우가 많아 종잡을 수 없는 편이며, 방향이 일정하게 정해져 있습니다.<br><br>주의해야할 점으로는 생각이 꼬리에 꼬리를 무는 경우가 많아 그 생각에서 헤어 나오지 못하는 경향이 있습니다. 그로 인해 생각의 바다에 빠져 문제해결에 집중하지 못하고 쉽게 방향을 잃고는 합니다. 그렇기 때문에, 자신의 생각에 대한 우선순위를 정해야 합니다. 주어진 상황에서 실제로 필요한 것들은 무엇이 있는지 생각하고 관심을 기울여 생각해내야 합니다. 또한, 계속 생각이 꼬리에 꼬리를 문다면 가벼운 산책이나 달리기 같은 신체적인 활동을 통해 잡념을 떨쳐내는 방법이 효과적입니다. 그리고 이들은 기존 업무를 완수하기 전에 새로운 업무로 쉽게 옮겨가는 성향이 있어서 너무 많은 일들을 벌리는 경향이 있습니다. 그렇기 때문에 기존 업무를 끝내고 다음 업무로 넘어가는 연습을 할 필요가 있습니다.<br>",
                "img_2":"champion/basic/자크.jpg",
                "img_3":"champion/basic/티모.jpg",
                "img_4":"champion/basic/세라핀.jpg"
            },

            "ENFJ":{
                "MBTI": "- ENFJ -", 
                "champ": "뽀삐", 
                "nickname": "망치의 수호자", 
                "explain": '"룬테라에는 용맹한 챔피언이 넘쳐나지만 뽀삐만큼 끈기 넘치는 이는 찾아보기 힘들다.<br>제 키의 두 배는 되는 망치 오를론을 들고 다니는 뽀삐는<br>오랫동안 망치의 정당한 주인이자 전설의 주인공인 데마시아의 영웅을 찾아 비밀스럽게 헤매고 있다.<br>그 때까지 뽀삐는 충실히 전투로 돌격해 망치를 크게 휘둘러 왕국의 적을 모두 날려 버린다!"', 
                "lines": '" 영웅이라뇨, 전 그저 망치를 든 요들일 뿐이에요. "',
                "img":"champion/new/뽀삐.jpg",
                "head_m_explain": "ENFJ",
                "head_m_explain2": "정의로운 사회운동가",
                "head_m_explain3": "타인의 성장을 도모하고 협동하는 사람들",
                "m_explain": "당신은 책임감이 강하고 사교성이 풍부하며 동정심이 많은 사람이군요.<br><br>ENFJ 유형은 상당히 이타적이어서 타인의 성장을 도모하고 협동하는 스타일이며, 친절하고 재치가 넘치는 유형입니다. 보통 사람을 대하는데 있어서 거리낌이 없는 스타일이어서 사람을 좋아하는 편이고 언변이 좋아 주변 사람들을 기분을 좋게 해주는 능력이 뛰어납니다. 그리고 다른 사람들의 좋은 점들을 때로는 지나치게 이상화하고 맹목적인 충성을 보이기도 한다. 공동선을 위하여 대체적으로 상대방 의견에 동의하는 경향이 있고, 새로운 아이디어에 대한 호기심이 많습니다. 그리고 생각을 글로 표현하는 것보다는 말로써 표현하는 것을 선호하는 경향이 있습니다. 다른 사람들로부터 인정과 칭찬을 받으면 맡은 일에 열중하고 비판에 민감해하는 경향이 있다.<br><br>주의해야할 점으로는 흔히 다른 사람들의 생각이 자신과 같을 것이라고 생각하는 경향이 있기 때문에 그렇지 않은 경우도 있다는 것을 알아야할 필요가 있다. 그리고 생각보다 중요하지 않은 일이나 사람, 믿음 등의 무엇인가에 맹목적으로 충성하거나 매달릴 때에 문제를 겪는 경우가 많은데, 그렇기 때문에 현재의 필요에 초점을 둘 필요가 있다. 일을 함으로써 생기게 되는 논리적인 결과들을 생각하고, 현실에 대해 관심을 기울일 필요가 있다.<br>",
                "img_2":"champion/basic/탈리아.jpg",
                "img_3":"champion/basic/오공.jpg",
                "img_4":"champion/basic/라칸.jpg"
            },

            "INTJ":{
                "MBTI": "- INTJ -", 
                "champ": "제이스", 
                "nickname": "미래의 수호자", 
                "explain": '"영민한 발명가 제이스는 필트오버의 수호와 진보를 위해서라면 무엇이든 할 수 있는 필트오버의 영웅이다.<br>마법공학 변신 해머를 전용무기로 사용하는 그는 자신의 힘과 용기, 지능을 언제든 조국을 위해 바칠 각오가 되어있다.<br>필트오버의 전 국민이 제이스를 영웅으로 추대하지만 정작 그는 이러한 관심을 반기지 않는다.<br>그에 대한 국민들의 칭송과 감탄이 적을 도발할 수 있다는 것을 누구보다 잘 알고 있기 때문이다.<br>조국에 대한 제이스의 충성심을 모르는 사람은 아무도 없으며 그의 능력을 시기하는 이들조차<br>진보의 도시를 수호하는 제이스의 노고에 감사를 표한다."', 
                "lines": '" 나는 더 나은 미래를 위해 싸운다. . ! "',
                "img":"champion/new/제이스.jpg",
                "head_m_explain": "INTJ",
                "head_m_explain2": "용의주도한 전략가",
                "head_m_explain3": "전체적으로 조합하여 비전을 제시하는 사람들",
                "m_explain": "당신은 전체를 조합하여 새로운 비전을 제시할 줄 아는 사람이군요.<br><br>INTJ 유형은 주변 사람들로부터 흔히 말하는 ‘범생이’라는 평가가 뒤따라오는 경향이 있습니다. 그렇기 때문인지 타인으로부터 신뢰를 받는 편인데 특히 직장 상사나 학생일 경우에는 선생님 같은 윗사람들에게 신뢰를 받는 경우가 많습니다. 이들은 행동과 사고에 있어 독창적이고, 내적인 신념과 비전은 산이라도 움직일 수 있을 것 같이 강하고 튼튼합니다. 그래서 그런지 특정 부분에 대해서는 고집이 센 편입니다. 그리고 복잡한 문제를 다루기를 좋아하고 자신이 관심을 가지는 일이라면 조직력을 발휘하여 일을 추진시키는 능력이 매우 뛰어납니다. 자신과 타인의 능력을 중요시하며, 목적 달성을 위한 결단력과 인내심이 뛰어난 편입니다.<br><br>주의해야할 점으로는 자신의 미래에 대한 비전이 사실이나 혹은 현실에 기초하지 않을 때 문제가 생길 수 있기 때문에 비현실적이거나 비실용적인 아이디어들을 포기할 때를 알고 포기하는 법을 배워야 할 필요가 있습니다. 그리고 고집이 센 편이기 때문에 특정 목표를 향해 외골수로 치닫는 경향으로 다른 사람들의 관점을 경시하게 됨으로써 문제가 생길 수 있습니다. 그렇기 때문에 너무 자신의 의견을 고집하기 보다는 타인의 피드백과 제안을 수용할 필요가 있고 이성이나 논리적인 것들보다 감각이나 감정의 가치에 주의를 기울일 필요가 있습니다.<br>",
                "img_2":"champion/basic/나서스.jpg",
                "img_3":"champion/basic/베이가.jpg",
                "img_4":"champion/basic/에코.jpg"
            },

            "INTP":{
                "MBTI": "- INTP -", 
                "champ": "질리언", 
                "nickname": "시간의 수호자", 
                "explain": '"한때 이케시아의 강력한 마법사였던 질리언은<br> 자신의 고국이 공허에 파괴되는 것을 목격한 후 시간의 흐름에 사로잡히게 되었다.<br>질리언은 처참한 상실감에 슬퍼할 틈도 없이, 미래의 모든 경우의 수를 예측하기 위해 시간 마법의 주문을 외웠다.<br>이제 사실상 불멸의 몸이 된 질리언은 정처없이 과거, 현재, 미래 시간대를 표류하며<br>이케시아를 멸망하기 전으로 돌려 놓을 시점을 찾아 모든 시간대에서 망연히 부유하고 있다. . !"', 
                "lines": '" 그리할 줄 알고 있었소. . . "',
                "img":"champion/new/질리언.jpg",
                "head_m_explain": "INTP",
                "head_m_explain2": "논리적인 사색가",
                "head_m_explain3": "비평적인 관점을 가지고 있는 뛰어난 전략가들",
                "m_explain": "당신은 조용하고 과묵하며 토론하는 것을 즐기는 사람이군요.<br><br>INTP 유형은 조용하고 과묵한 스타일이지만 관심이 있는 분야에 대해서는 말을 잘하는 편입니다. 보통 분석적이고 높은 직관력과 이해력을 가지고 있으며 지적 지식과 관련된 정보들에 관심이 많은 편입니다. 위 유형은 개인적인 인간관계나 파티에는 흥미를 보이지 않아 하고, 사람을 사귀는 데 있어서 토론하고 아이디어를 나누는 소수의 몇몇 사람들을 제외하고는 주위에 두지 않는 경향이 있습니다. 때때로, 어떤 아이디어에 대해 몰입하여 생각하느라 주위에서 돌아가고 있는 일들을 모를 때가 많습니다. 이처럼 위 유형은 뚜렷한 흥미선호도를 나타내는데 그로 인해 뛰어난 이해력과 직관력을 바탕으로 지적 호기심을 활용할 수 있는 분야에서 자신의 능력을 펼치는 경우가 많습니다.<br><br>주의해야할 점으로는 자신의 생각과 다른 사람들의 생각이 불일치하는 것에 너무 많은 에너지를 투자하기 때문에 그로인해 문제가 발생할 수 있습니다. 또, 주변인들로부터 부정적인 태도로 행동한다고 오해를 받거나 냉정하다는 비난을 받을 수도 있습니다. 그렇기 때문에 다른 사람들에게 우호적인 태도로 관심을 보여줄 필요가 있습니다. 자신의 사고 과정을 다른 사람과 공유하는 것을 연습한 후에야 다른 사람에게 자신의 분석을 적절하게 이해시키고 전달할 수 있을 것입니다.<br>",
                "img_2":"champion/basic/잭스.jpg",
                "img_3":"champion/basic/제라스.jpg",
                "img_4":"champion/basic/스웨인.jpg"  
            },

            "ENTP":{
                "MBTI": "- ENTP -", 
                "champ": "빅토르", 
                "nickname": "기계화의 전령관", 
                "explain": '"새로운 기술 시대의 도래를 알리는 전령 빅토르는 인류의 진보에 평생을 바쳤다.<br>인류의 지식수준을 한 단계 높이고자 하는 이상을 마음속에 간직한 채<br> 기술의 영광된 진화만이 인간의 잠재력을 완전히 발현시킬 수 있는 유일한 방법이라고 믿는다.<br>강철과 과학의 힘을 빌려 기계 인간으로 거듭난 빅토르는 인류의 밝은 미래를 위해 온 힘을 다한다. . !"', 
                "lines": '" 영광스러운 진화에 동참하라! "',
                "img":"champion/new/빅토르.jpg",
                "head_m_explain": "ENTP",
                "head_m_explain2": "뜨거운 논쟁을 즐기는 발명가",
                "head_m_explain3": "풍부한 상상력을 가지고 새로운것에 도전하는 사람들",
                "m_explain": "당신은 창의력과 상상력이 뛰어나고 항상 새로운 시도를 찾아 즐기는 사람이군요.<br><br>ENTP 유형은 안목이 넓고 다방면에 관심이 많아 항상 새로운 시도를 하고 새로운 가능성을 찾아나가는데 뛰어난 능력을 보이는 경향이 있습니다. 이를 토대로, 복잡한 문제해결에 뛰어난 재능을 가지고 있으며 새로운 관심사로 눈을 돌리고 연달아 새로운 프로젝트를 실행시킴으로써 더 큰 에너지를 충전 받는 경향이 있습니다. 다른 사람을 판단하려고 하기 보다는 이해하려고 노력하며 사람들의 동향에 대해 기민하고 박식한편입니다. 그렇기 때문에 여러 가지 일들에서 재능을 발휘하고 자신감이 충만한 편입니다. 관심이 있는 분야에서는 무슨 일이든지 해내려고 하고 해내고야 마는 능력을 보이지만 새로운 도전이 없는 분야에서는 쉽게 지루함을 느끼고 흥미를 느끼지 못하는 경향을 보입니다.<br><br>주의해야할 점으로는 능력을 중요시하기 때문에 어리석거나 무식하게 보이는 것을 두려워하고 타인의 성과나 의견을 무시하는 경우가 있으며 타인의 도전에 경쟁심을 느껴서 충돌하는 경우도 있습니다. 그렇기 때문에 타인의 의견을 인정하고 검증해보면서 자신의 아이디어에 대한 결점여부를 이중 체크 해 볼 필요가 있습니다. 완벽한 결론이나 결정을 내리기 전에 섣불리 판단하지 말고 타인들의 의견과 자료들을 모음으로써 그들의 근거를 정확히 이해하고 또 자신의 의견을 한 번 더 체크해보는 습관을 가질 필요가 있습니다. 또한, 너무 새로운 아이디어와 새로운 모델에 몰입하여 현재의 중요성을 잊기 쉽기 때문에 현재에 중요한 일들이 무엇이 있는지 다시금 생각해보는 습관도 가질 필요가 있습니다.<br>",
                "img_2":"champion/basic/하이머딩거.jpg",
                "img_3":"champion/basic/문도박사.jpg",
                "img_4":"champion/basic/럼블.jpg"
            },
            
            "ENTJ":{
                "MBTI": "- ENTJ -", 
                "champ": "자르반4세", 
                "nickname": "데마시아의 귀감", 
                "explain": '"라이트실드 왕조의 자손인 자르반 왕자는 데마시아의 왕좌를 물려받을 후계자이다.<br>데마시아의 덕목을 대표하는 귀감으로 자라난 자르반 왕자는<br>자신의 어깨에 짊어진 큰 기대와 전선에서 싸우고 싶다는 개인적 욕망 사이에서 갈등해야 했다.<br>자르반 왕자는 가공할 만한 용기와 자신을 돌보지 않는 투지로 병사들을 고무시키며,<br>데마시아의 기치를 높이 들고 자신의 백성을 이끄는 미래의 지도자로서 진정한 힘을 뿜어낸다."', 
                "lines": '" 내 의지로 여기서 끝을 보겠노라. . ! "',
                "img":"champion/new/자르반4세.jpg",
                "head_m_explain": "ENTJ",
                "head_m_explain2": "대담한 통솔자",
                "head_m_explain3": "비전을 가지고 사람들을 활력적으로 이끌어가는 사람들",
                "m_explain": "당신은 열정적이고 활동적이며 뚜렷한 비전을 가지고 사람들을 이끄는 지도자의 기질을 가진 사람이군요.<br><br>ENTJ 유형은 앞서 말한 것처럼 활동적이며 행정적인 일과 장기계획을 선호하고 또, 그에 걸맞은 비전을 가지고 그것을 위한 목적달성을 위해 타인을 활력적으로 이끄는 경향이 있습니다. 이들은 어떠한 일을 당장 처리하지 않고 나중으로 미뤄두는 유보적인 태도나 어투보다는 딱 잘라서 판단하고 결정하는 단정적인 태도와 어투를 사용하는 경향이 있습니다. 다른 사람들과 두루두루 잘 지내며 어느 한 그룹에 속해 있을 경우에는 리더의 역할을 하는 경우가 많습니다. 비능률적이거나 확실치 않은 상황에서는 별로 인내심이 없는 경우가 많고 뛰어난 결정력과 통솔력을 바탕으로 상황이 필요로 할 때, 거시적인 안목으로 일을 밀고 나가는 경우가 많습니다. 그리고 관념자체에 집중하는 경향이 있으며, 관념이면의 사람에게는 관심을 가지지 않는 경우가 많습니다.<br><br>주의해야할 점으로는 목표를 추구하는데 있어서 너무 직접적인 방식을 취하고 있고 너무 쉽게 결정하며 바로바로 행동하는 경향이 있기 때문에 종종 자신의 계획한대로 진행되지 않을 경우가 많은데, 이 때, 인내심을 잃는 경우가 많으며 정작 본인만 그 이유를 모른 상태에서 다른 사람을 타박하는 경우가 많습니다. 그렇기 때문에 전체적인 목표를 기억하면서, 그 목표에 도달하는 방식에는 여러 가지가 있을 수 있으며, 때로는 자신이 선택한 방식보다 더 좋은 방식이 있다는 사실을 이해하고 받아들이는 연습이 필요합니다. 더불어 다른 사람들의 관심과 노력이 뒷받침 되어야 달성할 수 있는 목표가 있다는 것도 알아야 하며, 그들의 기여를 인정하고 감정에 귀 기울이며 그들의 요구가 무엇인지 들어줄 필요가 있습니다. 전체적으로 봤을 때는 앞으로 달려 나가기 전에 실질적, 개인적, 상황적 상태를 검토하고 그것들을 고려할 시간적 여유를 가질 필요가 있습니다.<br>",
                "img_2":"champion/basic/아지르.jpg",
                "img_3":"champion/basic/모데카이저.jpg",
                "img_4":"champion/basic/다리우스.jpg"
            }


        }
        
        $(".important").hide(); //result에서만 보이게함.

        function go() {
            $(".start").hide();
            $(".result").show();

            var mbti="";
            ($("#EI").val()<2) ? mbti+="I" : mbti+="E";
            ($("#SN").val()<2) ? mbti+="N" : mbti+="S";
            ($("#TF").val()<2) ? mbti+="F" : mbti+="T";
            ($("#JP").val()<2) ? mbti+="P" : mbti+="J";

            $("#img").attr("src", result[mbti]["img"]);
            $("#img_2").attr("src", result[mbti]["img_2"]);
            $("#img_3").attr("src", result[mbti]["img_3"]);
            $("#img_4").attr("src", result[mbti]["img_4"]);
            $("#champ").html(result[mbti]["champ"]);
            $("#explain").html(result[mbti]["explain"]);
            $("#lines").html(result[mbti]["lines"]);
            $("#nickname").html(result[mbti]["nickname"]);
            $("#MBTI").html(result[mbti]["MBTI"]);
            $("#head_m_explain").html(result[mbti]["head_m_explain"]);
            $("#head_m_explain2").html(result[mbti]["head_m_explain2"]);
            $("#head_m_explain3").html(result[mbti]["head_m_explain3"]);
            $("#m_explain").html(result[mbti]["m_explain"]);
            $(".important").show();
            
        }
        function start() {
            $(".start").hide();
            $(".question").show();
            next();
        }
        

        
        $("#A").click(function(){
            var type=$("#type").val();
            var preValue = $("#"+type).val();
            $("#"+type).val(parseInt(preValue)+1);
            next();
        });

        $("#B").click(function(){
            next();
        });
       
        function next(){
            if(num==13){
                loading();
                setTimeout(function () {
                    $(".question").hide();
                    $(".analyze-wrapper").hide();
                    $(".page-wrapper").removeClass("blur");
                    $(".result").show();
                }, 3500);

                //각 MBTI에 맞게 출력
                var mbti="";
                ($("#EI").val()<2) ? mbti+="I" : mbti+="E";
                ($("#SN").val()<2) ? mbti+="N" : mbti+="S";
                ($("#TF").val()<2) ? mbti+="F" : mbti+="T";
                ($("#JP").val()<2) ? mbti+="P" : mbti+="J";
                
                // if($("#EI").val()<2){
                    
                //     mbti=mbti+"I"
                // }
                // else{
                //     mbti=mbti+"E"
                // } 삼항연산자로 간단하게 표현가능
                
                //해당 MBTI를 키로 각 MBTI맞는 동물사진과 설명을 출력

                $("#img").attr("src", result[mbti]["img"]);
                $("#img_2").attr("src", result[mbti]["img_2"]);
                $("#img_3").attr("src", result[mbti]["img_3"]);
                $("#img_4").attr("src", result[mbti]["img_4"]);
                $("#champ").html(result[mbti]["champ"]);
                $("#explain").html(result[mbti]["explain"]);
                $("#lines").html(result[mbti]["lines"]);
                $("#nickname").html(result[mbti]["nickname"]);
                $("#MBTI").html(result[mbti]["MBTI"]);
                $("#head_m_explain").html(result[mbti]["head_m_explain"]);
                $("#head_m_explain2").html(result[mbti]["head_m_explain2"]);
                $("#head_m_explain3").html(result[mbti]["head_m_explain3"]);
                $("#m_explain").html(result[mbti]["m_explain"]);
                $(".important").show();

            }
            else{
                $(".progress-bar").attr('style', 'width: calc(100/12*'+num+'%)');
                $("#title").html(q[num]["title"]);
                $("#type").val(q[num]["type"]);
                $("#A").html(q[num]["A"]);
                $("#B").html(q[num]["B"]);
                num++;
            }
        

            
        }
        
        function loading() {
            $(".analyze-wrapper").toggleClass("open");
            $(".question").toggleClass("blur");
            return false;
        }

 
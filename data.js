// 항목 추가: 맨 위에 새 항목을 넣으면 됩니다. (날짜순 자동 정렬)
// type: "뉴스" 또는 "이슈"
// date: 기사 날짜
// comment: 줄바꿈은 \n
// image: images 폴더 안의 파일 경로(예: "images/1028.jpg") 또는 이미지 주소. 없으면 ""
const DATA = [
  {
    type: "뉴스",
    date: "2026-10-28",
    title: "한전, AI로 전력기자재 수요 예측… 연 130억원 절감 기대",
    comment: "",
    url: "https://www.the-biz.co.kr/news/articleView.html?idxno=730132",
    image: "https://cdn.the-biz.co.kr/news/photo/202610/730132_936689_5148.jpg"
  },
  {
    type: "이슈",
    date: "2026-10-26",
    title: "\"하단 1250원?\" 환율 향방은…추가 하락 에너지 충분 vs 급락 레벨 부담",
    comment: "",
    url: "https://n.news.naver.com/article/277/0005833455?sid=101",
    image: "https://imgnews.pstatic.net/image/277/2026/10/26/0005833455_001_20261026145911393.jpg?type=w800"
  },
  {
    type: "이슈",
    date: "2026-10-27",
    title: "(재생E 매칭포럼) 재생E 늘리려면 거래부터 유연하게...단기 PPA·조달 선택지 확대 주문",
    comment: "재생에너지 거래 유연화 논의 – 장기 PPA 부담으로 거래가 막히자 단기 PPA·녹색요금제(UGT) 확대 요구. 한전이 UGT를 운영할 경우 판매·회계 분리로 가격 투명성을 확보해야 한다는 지적.",
    url: "https://www.electimes.com/news/articleView.html?idxno=373956",
    image: "https://cdn.electimes.com/news/photo/202610/373956_587614_272.jpg"
  },
  {
    type: "뉴스",
    date: "2026-10-24",
    title: "한전, 사채 한도 19조 초과 위기…전기요금 인상론 재점화",
    comment: "- 한전 사채발행한도특례 종료 예정\n- 특례종료시 잔액이 한도 19.2조 초과 전망\n- 투자재원 마련 위해 전기요금 인상 필요 의견",
    url: "https://www.yna.co.kr/view/AKR20261023178600003?input=1195m",
    image: "https://img0.yna.co.kr/photo/cms/2023/05/13/05/PCM20230513000005990_P4.jpg"
  },
  {
    type: "이슈",
    date: "2026-08-26",
    title: "남부지방은 산업 전기료 최대 10% 싸진다…지역 요금제 공개(종합)",
    comment: "- 지역별 차등 요금제 도입 추진\n- 전력자급율과 송전비용에 따라 산업용 전기요금 차등 적용\n- 지방 산업 활성화 기대\n- 한전 수익성 악화 및 지역 간 형평성 논란",
    url: "https://www.yna.co.kr/view/AKR20260826092151530?section=industry%2Fall",
    image: "https://img9.yna.co.kr/photo/yna/YH/2026/06/22/PYH2026062209360001300_P4.jpg"
  },
  {
    type: "이슈",
    date: "2026-09-15",
    title: "송전망 급한 정부…송전탑 덜 짓고 주거지 주변은 지중화(종합)",
    comment: "- 정부는 송전망 확충을 위해 기존 선로를 통합해 송전탑 최대 47% 줄이고, 건설 비용과 기간을 절감할 계획\n- 주거 밀집 지역과 주민 반발이 큰 구간은 송전선 지중화 추진, 송전망 주변 마을에는 태양광 발전을 통한 소득 지원 방안 마련\n- 주민 설명회와 입지 선정 과정의 참여를 확대해 수용성 높이려 하지만, 대규모 송전망 건설에 대한 지역사회의 반발을 해소할 수 있는지는 과제로 남음",
    url: "https://www.yna.co.kr/view/AKR20260915029751530?input=copy",
    image: "https://img6.yna.co.kr/photo/yna/YH/2026/07/07/PYH2026070710800001300_P4.jpg"
  },
  {
    type: "뉴스",
    date: "2026-01-14",
    title: "한전, 세계 최대 美 전략시장에 K-배전 기술 선보여",
    comment: "- 미국 사우스캐롤라이나주 컬럼비아시와 배전망 MOU를 체결해 미국 전력시장 진출 추진\n- 차세대 배전관리시스템과 에너지관리시스템을 현지 전력망에 적용하고, 공동 연구를 통해 미국 환경에 맞는 운영 기술을 개발 및 검증할 계획\n- 이번 협력은 재생에너지 확대와 노후 배전망 효율화에 대응하는 동시에, 한전의 배전 기술을 해외 시장으로 확대하는 기반을 마련했다는 데 의미",
    url: "https://www.yna.co.kr/view/AKR20260114103500003?input=copy",
    image: "https://img0.yna.co.kr/etc/inner/KR/2026/01/14/AKR20260114103500003_01_i_P4.jpg"
  }
];

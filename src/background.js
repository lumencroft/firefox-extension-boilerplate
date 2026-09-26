console.log("파이어폭스 백그라운드 스크립트가 실행되었습니다.");

// 익스텐션 설치 시 최초 실행
browser.runtime.onInstalled.addListener(() => {
  console.log("익스텐션이 성공적으로 설치되었습니다.");
});
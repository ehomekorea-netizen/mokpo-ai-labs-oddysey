---
name: web-curriculum-builder
description: 명함 데이터 분석과 비디오 스크롤 인터랙션이 내장된 프리미엄 웹 교안 사이트(HTML)를 설계 및 빌드하는 기술입니다.
---

# Web Curriculum Builder Skill

이 기술은 수강생들이 명함의 비주얼 정체성을 추출하여 AI 개인 브랜딩 사이트를 구축하고, 이를 영상 프레임 기반의 스크롤 페이지로 확장할 수 있도록 돕는 **'프리미엄 7단계 웹 교안 사이트(index.html)'**를 설계, 확장 및 유지보수하는 전문 지침입니다.

---

## 1. 교안 디자인 표준 시스템 (Design System Tokens)

교안 웹사이트는 전통적인 아날로그 종이 명함의 감성과 현대적인 개발자 도구의 느낌을 조화롭게 융합한 프리미엄 감각을 유지해야 합니다.

*   **배경색 (Background)**: 따뜻한 미색 종이 질감 (`bg-[#f8f4ed]`)
*   **텍스트 주색상 (Text)**: 묵직한 오프블랙 에디토리얼 무드 (`text-[#191f28]` 또는 `text-ink-900`)
*   **악센트 컬러 (Accent)**: 시그니처 오렌지 테마 (`text-[#e66825]`, `bg-[#e66825]`)
*   **모듈 레이아웃**:
    *   기본 카드는 부드러운 라운딩(`rounded-3xl`)과 가느다란 외곽선(`border-ink-100`), 은은한 그림자 적용.
    *   강조 영역(Step 0 배포 영역, Step 7 슬라이서 본체)은 다크 테마(`bg-ink-900`, `text-white`)를 활용하여 시각적 리듬감 부여.

---

## 2. 핵심 컴포넌트 아키텍처 및 구현 명세

### Step 0: 웹의 뿌리 이해하기 (Interactive Playground)
수강생들이 코딩 없이 핵심 개념을 직접 조작해 보는 3대 샌드박스입니다.
1.  **인터넷 vs 웹, 그리고 배포 (동적 패킷 시뮬레이터)**:
    *   브라우저-인터넷망-웹서버(Netlify) 노드 배치.
    *   버튼 클릭 시 `GET` 또는 `ZIP` 패킷이 절대 좌표 트랜지션(`transition-all duration-1000`)으로 움직이며 화면이 활성화되는 효과 구현.
2.  **HTML 뼈대와 CSS 옷 (실시간 스타일 파서)**:
    *   HTML/CSS 토글 스위치 상태에 따라 우측 가상 뷰어 카드를 실시간 렌더링.
    *   CSS OFF 시, 꾸밈 요소가 없는 날것의 브라우저 기본 서체(Serif)와 투박한 레이아웃을 표시하여 스타일의 중요성을 즉각 증명.
3.  **JS: 브라우저 리모컨 (이벤트 & 상태 콘솔)**:
    *   가상 프로필 카드 클릭 시 우측의 자바스크립트 코드 스니펫(`addEventListener`) 라인을 한 줄씩 순차적으로 하이라이트하고 화면 하단에 알림창(Toast) 렌더링.
4.  **프론트엔드 대서사시 모달 (`modal-frontend-history`)**:
    *   가독성 확장을 위해 대형 사이즈(`sm:max-w-6xl`)로 빌드.
    *   태초의 웹 ➔ jQuery ➔ Node.js/NPM ➔ React/SPA ➔ 빌드/AI 에이전트 시대로 이어지는 수직 연대기 타임라인을 고유 테마 배지와 함께 풍부한 해설로 제공.

### Step 2 & 3: AI 빌드업 지침 (Prompt Copy Blocks)
*   **1단계 빌드업 (Step 2)**: 명함에서 디자인 명세(`DESIGN.md`)를 뽑아내는 마스터 프롬프트 복사 블록 제공.
*   **2단계 빌드업 (Step 3)**: 복사 버튼을 이중화하여 다음 두 가지 지침을 선택 제공.
    *   `2단계 마스터 지침 복사` (구조적 완성도 중심)
    *   `대안형(인터랙션 특화) 지침 복사` (SVG 세로 인디케이터 트래킹 및 격자 레이아웃 역동성 특화)

### Step 7: 스크롤 필름 슬라이서 (HTML5 Video & Canvas Slicer Engine)
업로드된 영상을 로컬 브라우저 디코더와 캔버스를 활용해 프레임 배열로 고속 직렬화하는 백엔드-리스 미디어 프로세싱 모듈입니다.
1.  **동영상 로컬 마운트**: `URL.createObjectURL(file)`을 이용해 바이너리를 브라우저 주소에 로딩.
2.  **비동기 프레임 탐색 (Promise Lock)**:
    ```javascript
    function seekScrollFilm(time) {
      return new Promise(resolve => {
        sfVideo.onseeked = () => resolve();
        sfVideo.currentTime = Math.min(time, Math.max(0, sfVideo.duration - 0.02));
      });
    }
    ```
    디코더 완료 이벤트인 `onseeked`가 호출될 때까지 대기(Lock)하여 깨짐 없는 프레임을 보장.
3.  **프레임 추출**: 캔버스에 `drawImage()`로 스냅샷을 뜬 후, `toDataURL('image/jpeg', quality)`로 JPEG 데이터 문자열로 압축하여 배열에 저장.
4.  **슬라이서 작동원리 모달 (`modal-slicer-tech`)**:
    *   브라우저 로컬 그래픽 파이프라인의 4단계(디코더 ➔ 캔버스 ➔ JPEG 압축 ➔ 비동기 락)를 인포그래픽 카드로 풀어 설명.

---

## 3. 코드 유지보수 및 확장 규칙

1.  **단일 파일 완결성**: 모든 CSS는 Tailwind 유틸리티 클래스로 표현하고, 모든 이벤트 조작 및 미디어 디코딩 엔진은 인라인 `<script>` 태그 내의 순수 바닐라 자바스크립트로 자생적으로 돌도록 작성합니다. 외부 라이브러리 추가는 지양합니다.
2.  **모달 통제 규칙**: 모달을 제어할 때는 전역으로 선언된 `window.openModal(id)` 및 `window.closeModal(id)` 함수를 일관되게 호출하여 `hidden` 클래스를 제거/추가하고 `flex` 모드를 토글합니다.
3.  **터미널 안전성 지침**: 교안 파일을 추가하거나 빌드 도구를 연동할 때, 에이전트는 무조건 터미널 명령어 블록 첫머리에 프로젝트 루트 경로 이동 명령어(`cd C:\Users\IN\Desktop\mokpo-ai-curriculum`)를 포함시켜 사용자 실수 경로 이탈을 사전에 방지합니다.

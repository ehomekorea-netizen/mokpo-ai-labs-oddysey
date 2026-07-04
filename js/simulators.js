// ==========================================
// LIVE SIMULATORS & INTERACTIVE WIDGETS
// ==========================================

// 1. Live HTTP Requester (Slide 3)
function runHttpSimulator() {
  const packet = document.getElementById('sim-packet');
  const output = document.getElementById('sim-response-output');
  const status = document.getElementById('sim-status');
  const targetUrl = document.getElementById('sim-url').value;

  status.innerText = "SENDING...";
  status.className = "text-brandOrange font-bold";
  packet.style.opacity = "1";
  packet.style.transition = "left 1s cubic-bezier(0.4, 0, 0.2, 1)";
  packet.style.left = "90%";

  setTimeout(() => {
    status.innerText = "PROCESSING...";
    status.className = "text-yellow-500 font-bold";
    
    setTimeout(() => {
      packet.style.transition = "left 1.2s cubic-bezier(0.4, 0, 0.2, 1)";
      packet.style.left = "0%";
      status.innerText = "RECEIVING...";
      status.className = "text-blue-500 font-bold";

      setTimeout(() => {
        packet.style.opacity = "0";
        status.innerText = "200 OK (SUCCESS)";
        status.className = "text-brandGreen font-bold";

        output.innerHTML = `<span class="text-brandGreen">HTTP/1.1 200 OK</span>
<span class="text-slate-500">Content-Type: text/html; charset=UTF-8
Server: MokpoAILabServer/2.5.0</span>

&lt;html&gt;
  &lt;body class="bg-black"&gt;
    &lt;h1 class="text-orange"&gt;Welcome to Mokpo AI Lab!&lt;/h1&gt;
    &lt;p&gt;HTTP Request completed successfully to URL: ${targetUrl}&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;`;
      }, 1200);
    }, 800);
  }, 1000);
}

// HTTP Requester Reset function
function resetHttpSimulator() {
  const input = document.getElementById('sim-url');
  if (input) {
    input.value = "http://mokpolab.ai/docs";
  }
  const packet = document.getElementById('sim-packet');
  if (packet) {
    packet.style.opacity = "0";
    packet.style.left = "0%";
  }
  const output = document.getElementById('sim-response-output');
  if (output) {
    output.innerHTML = "주소를 기입하고 [요청 전송] 버튼을 눌러보세요.";
  }
  const status = document.getElementById('sim-status');
  if (status) {
    status.innerText = "WAITING...";
    status.className = "font-extrabold text-slate-400";
  }
}

// 2. Live CSS Playground (Slide 6)
function runCssPlayground() {
  const pad = document.getElementById('slider-pad').value;
  const radius = document.getElementById('slider-radius').value;
  const glow = document.getElementById('slider-glow').value;

  document.getElementById('label-pad').innerText = pad + 'px';
  document.getElementById('label-radius').innerText = radius + 'px';
  document.getElementById('label-glow').innerText = glow + 'px';

  document.getElementById('code-pad').innerText = pad + 'px';
  document.getElementById('code-radius').innerText = radius + 'px';
  document.getElementById('code-glow').innerText = glow + 'px';

  const simBox = document.getElementById('sim-box');
  simBox.style.padding = pad + 'px';
  simBox.style.borderRadius = radius + 'px';
  simBox.style.boxShadow = `0 0 ${glow}px rgba(255, 107, 53, ${0.1 + glow/40})`;
}

// CSS Playground Reset function
function resetCssPlayground() {
  const sliderPad = document.getElementById('slider-pad');
  const sliderRadius = document.getElementById('slider-radius');
  const sliderGlow = document.getElementById('slider-glow');
  if (sliderPad) sliderPad.value = "24";
  if (sliderRadius) sliderRadius.value = "12";
  if (sliderGlow) sliderGlow.value = "12";
  runCssPlayground();
}

// 3. Live DOM Manipulator (Slide 8)
let domSimCount = 0;
function domSimAdd() {
  domSimCount++;
  const sandbox = document.getElementById('dom-sim-sandbox');
  const consoleLog = document.getElementById('dom-sim-console');

  const newDiv = document.createElement('div');
  newDiv.id = `dom-item-${domSimCount}`;
  newDiv.className = "px-3 py-1.5 bg-slate-900 border border-white/10 text-white rounded text-xs transition-all hover:border-brandOrange cursor-pointer select-none animate-pulse";
  newDiv.innerText = `div#item-${domSimCount}`;
  newDiv.onclick = () => {
    newDiv.classList.toggle('bg-brandOrange');
    newDiv.classList.toggle('text-black');
    consoleLog.innerHTML += `<div class="text-brandOrange">&gt;_ Clicked: toggleClass on #item-${newDiv.id.split('-')[2]}</div>`;
    consoleLog.scrollTop = consoleLog.scrollHeight;
  };

  sandbox.appendChild(newDiv);

  consoleLog.innerHTML += `<div class="text-brandGreen">&gt;_ const newDiv = document.createElement('div');</div>`;
  consoleLog.innerHTML += `<div class="text-brandGreen">&gt;_ newDiv.id = "item-${domSimCount}";</div>`;
  consoleLog.innerHTML += `<div class="text-brandGreen">&gt;_ root.appendChild(newDiv);</div>`;
  consoleLog.scrollTop = consoleLog.scrollHeight;
}

// Clear function for DOM simulator
function domSimClear() {
  const sandbox = document.getElementById('dom-sim-sandbox');
  const consoleLog = document.getElementById('dom-sim-console');
  sandbox.innerHTML = `<div class="px-3 py-1.5 bg-brandOrange/10 border border-brandOrange text-brandOrange rounded text-xs font-bold">#root</div>`;
  domSimCount = 0;

  consoleLog.innerHTML += `<div class="text-red-400">&gt;_ root.innerHTML = ''; // reset completed</div>`;
  consoleLog.scrollTop = consoleLog.scrollHeight;
}

// 4. Live Reflow vs Repaint Simulator (Slide 11)
let reflowCount = 0;
let repaintCount = 0;

function triggerSimReflow() {
  reflowCount++;
  repaintCount++;
  
  document.getElementById('score-reflow').innerText = reflowCount;
  document.getElementById('score-repaint').innerText = repaintCount;

  const pipeLayout = document.getElementById('pipe-layout');
  const pipePaint = document.getElementById('pipe-paint');

  pipeLayout.className = "px-3 py-1.5 bg-red-600 border border-red-500 rounded text-white transition-colors duration-75";
  pipePaint.className = "px-3 py-1.5 bg-brandGreen border border-emerald-500 rounded text-white transition-colors duration-75";

  setTimeout(() => {
    pipeLayout.className = "px-3 py-1.5 bg-slate-900 border border-white/5 rounded text-slate-500 transition-colors";
    pipePaint.className = "px-3 py-1.5 bg-slate-900 border border-white/5 rounded text-slate-500 transition-colors";
  }, 400);
}

function triggerSimRepaint() {
  repaintCount++;
  document.getElementById('score-repaint').innerText = repaintCount;

  const pipePaint = document.getElementById('pipe-paint');
  pipePaint.className = "px-3 py-1.5 bg-brandGreen border border-emerald-500 rounded text-white transition-colors duration-75";

  const pipeLayout = document.getElementById('pipe-layout');
  pipeLayout.className = "px-3 py-1.5 bg-slate-950 border border-white/5 rounded text-slate-700 transition-colors";

  setTimeout(() => {
    pipeLayout.className = "px-3 py-1.5 bg-slate-900 border border-white/5 rounded text-slate-500 transition-colors";
    pipePaint.className = "px-3 py-1.5 bg-slate-900 border border-white/5 rounded text-slate-500 transition-colors";
  }, 400);
}

// Performance Styler Reset function
function resetPerformanceSim() {
  reflowCount = 0;
  repaintCount = 0;
  const scoreReflow = document.getElementById('score-reflow');
  const scoreRepaint = document.getElementById('score-repaint');
  if (scoreReflow) scoreReflow.innerText = "0";
  if (scoreRepaint) scoreRepaint.innerText = "0";
  
  const pipeLayout = document.getElementById('pipe-layout');
  const pipePaint = document.getElementById('pipe-paint');
  if (pipeLayout) {
    pipeLayout.className = "px-3 py-1.5 bg-slate-900 border border-white/5 rounded text-slate-500 transition-colors";
  }
  if (pipePaint) {
    pipePaint.className = "px-3 py-1.5 bg-slate-900 border border-white/5 rounded text-slate-500 transition-colors";
  }
}

// Counter increment for React stamp visualizer
function incrementCounter(id) {
  const el = document.getElementById(id);
  if (el) {
    let count = parseInt(el.innerText.split(': ')[1]) || 0;
    count++;
    el.innerText = `Clicks: ${count}`;
  }
}


// ==========================================
// WORKSHOP STEP 1 BUILDER
// ==========================================
const step1Moods = {
  'cozy-linen': `## design_tokens:
colors:
  primary_background: "#FAF9F6" # Linen White
  primary_text: "#1E1E1E" # Charcoal
  accent_color: "#D4AF37" # Brass Gold
  fouc_prevention_bg: "#FAF9F6"
typography:
  display_family: "'Playfair Display', serif"
  body_family: "'Pretendard', sans-serif"`,
  
  'neon-cyber': `## design_tokens:
colors:
  primary_background: "#08090F" # Obsidian Dark
  primary_text: "#E2E8F0" # Silver Gray
  accent_color: "#00FFCC" # Neon Cyan/Teal
  fouc_prevention_bg: "#08090F"
typography:
  display_family: "'Outfit', sans-serif"
  body_family: "'Pretendard', sans-serif"`
};

function updateStep1Prompt() {
  const selectedMood = document.querySelector('input[name="moodStyle"]:checked').value;
  const step1Colors = document.getElementById('step1Colors').value.trim() || '배경: #0A0A0A, 텍스트: #FFFFFF, 악센트: #FF6B35';
  const step1Fonts = document.getElementById('step1Fonts').value.trim() || '헤드라인: Outfit Serif, 본문: Pretendard';

  const prompt = `[1단계 DESIGN.md 생성 프롬프트]

역할: 당신은 세계 최고 수준의 AI 디자인 엔지니어입니다.
요청: 오프라인 브랜드 무드와 지정 정보를 참고하여 구글 DESIGN.md 디자인 스펙(YAML) 형태로 시각적 자산을 토큰화하세요.

### 입력된 시각 속성 지침
- 색상 선호: ${step1Colors}
- 폰트 매칭: ${step1Fonts}
- 베이스 지향 스타일: ${selectedMood === 'cozy-linen' ? 'Cozy Linen' : 'Neon Cyberpunk'}

### 출력 필수 YAML 예시 구조
\`\`\`markdown
# 1단계 결과물 (DESIGN.md)

${step1Moods[selectedMood]}
\`\`\`

출력 규칙: 위 토큰 정보를 참고하여 시각적 타당성을 기술한 주석 및 YAML 명세서를 완성하여 출력하세요.`;

  document.getElementById('outputStep1Prompt').innerText = prompt;
}

function copyStep1Prompt() {
  const text = document.getElementById('outputStep1Prompt').innerText;
  const btn = document.getElementById('btnCopyStep1');
  navigator.clipboard.writeText(text).then(() => {
    const orig = btn.innerHTML;
    btn.innerHTML = `<i data-lucide="check" class="w-3.5 h-3.5 text-emerald-300"></i> 복사 완료!`;
    btn.classList.replace('bg-brandOrange', 'bg-emerald-600');
    setTimeout(() => {
      btn.innerHTML = orig;
      btn.classList.replace('bg-emerald-600', 'bg-brandOrange');
      lucide.createIcons();
    }, 1500);
  });
}

function loadSampleStep1() {
  document.getElementById('step1Colors').value = '배경: #0A0A0A, 텍스트: #FFFFFF, 주황포인트: #FF6B35';
  document.getElementById('step1Fonts').value = '디스플레이: Outfit, 바디: Pretendard';
  updateStep1Prompt();
}


// ==========================================
// WORKSHOP STEP 2 BUILDER
// ==========================================
const promptStyleTemplates = {
  'warm-minimal': `# 2단계 지침: DESIGN.md 명세를 기반으로 프리미엄 싱글 파일 HTML 생성

당신은 세계 최고 수준의 프론트엔드 디자이너이자 Tailwind CSS 전문가입니다. 
제시된 시각적 정체성을 따뜻하고 인간적인 아날로그 감성으로 재해석하여 웹 환경에 맞는 프리미엄 브랜딩 페이지를 빌드합니다.

## ■ 디자인 스타일: Warm Minimal (따뜻한 리넨 & 에디토리얼)
- **무드**: 천연 종이(Linen)의 촉각적 느낌, 인쇄된 활자가 주는 신뢰감, 여백의 미학.
- **색상 팔레트**: 웜 화이트/베이지 계열 배경, 오프블랙(차콜) 본문 텍스트, 은은한 골드 악센트.`,

  'dark-tech': `# 2단계 지침: DESIGN.md 명세를 기반으로 프리미엄 싱글 파일 HTML 생성

당신은 세계 최고 수준의 프론트엔드 디자이너이자 Tailwind CSS 전문가입니다. 
제시된 시각적 정체성을 현대적이고 미래지향적인 다크 테크 감성으로 재해석하여 웹 환경에 맞는 프리미엄 브랜딩 페이지를 빌드합니다.

## ■ 디자인 스타일: Sleek Dark Tech
- **무드**: 깊고 묵직한 검은 유리 질감, 개발자 콘솔의 정밀함, 네온 악센트.`
};

const basePromptRules = `
## ■ 절대 준수 규칙
1. 순수 HTML + Tailwind CSS (CDN) + 바닐라 자바스크립트(Vanilla JS)만 사용하세요.
2. <body> 태그에 인라인 스타일로 fouc_prevent_bg 토큰값을 강제 적용하여 화면 깜빡임을 방지하세요.
3. SVG 요소를 활용한 인터랙티브 가이드라인을 배치하세요.`;

function updateStep2Prompt() {
  const designMd = document.getElementById('designMdText').value.trim() || '[이곳에 1단계에서 추출된 DESIGN.md 내용이 들어갑니다]';
  
  let promptText = promptStyleTemplates['dark-tech'] + basePromptRules;

  // Check modifiers
  let modifiersSection = "\n\n## ⚡ [변주 지침] 구현 모디파이어:\n";
  let hasModifiers = false;

  if (document.getElementById('modBento').checked) {
    modifiersSection += `- Bento Grid Layout: 3차원 바둑판 카드 정렬 레이아웃을 구성하세요.\n`;
    hasModifiers = true;
  }
  if (document.getElementById('modSplit').checked) {
    modifiersSection += `- Split Screen Layout: 좌측 컬럼은 고정, 우측만 스크롤되는 반분 고정 화면을 취하세요.\n`;
    hasModifiers = true;
  }
  if (document.getElementById('modScramble').checked) {
    modifiersSection += `- Text Scramble Effect: 글자 해독 스크램블 인터랙티브를 탑재하세요.\n`;
    hasModifiers = true;
  }
  if (document.getElementById('modNoise').checked) {
    modifiersSection += `- SVG Film Grain Filter: 질감을 더해주는 그레인 노이즈 필터를 삽입하세요.\n`;
    hasModifiers = true;
  }

  if (hasModifiers) {
    promptText += modifiersSection;
  }

  promptText += `\n\n### 📥 입력된 DESIGN.md 명세\n\`\`\`markdown\n${designMd}\n\`\`\``;
  document.getElementById('outputPromptArea').innerText = promptText;
}

function copyPromptToClipboard() {
  const text = document.getElementById('outputPromptArea').innerText;
  const btn = document.getElementById('btnCopyPrompt');
  navigator.clipboard.writeText(text).then(() => {
    const orig = btn.innerHTML;
    btn.innerHTML = `<i data-lucide="check" class="w-3.5 h-3.5 text-emerald-300"></i> 복사 완료!`;
    btn.classList.replace('bg-brandOrange', 'bg-emerald-600');
    setTimeout(() => {
      btn.innerHTML = orig;
      btn.classList.replace('bg-emerald-600', 'bg-brandOrange');
      lucide.createIcons();
    }, 1500);
  });
}

function loadSampleStep2() {
  document.getElementById('designMdText').value = `## design_tokens:
colors:
  primary_background: "#0A0A0A"
  primary_text: "#FFFFFF"
  accent_color: "#FF6B35"
  fouc_prevention_bg: "#0A0A0A"
typography:
  display_family: "'Outfit', sans-serif"
  body_family: "'Pretendard', sans-serif"`;
  updateStep2Prompt();
}


// ==========================================
// QUIZ AND GEMINI API PLACEOHOLDER
// ==========================================
let selectedQuizAnswer = null;

function selectQuizOption(index) {
  selectedQuizAnswer = index;
  
  // Reset styles of all options
  for (let i = 1; i <= 4; i++) {
    const opt = document.getElementById(`opt-${i}`);
    if (opt) {
      opt.className = "flex items-center gap-3 p-4 bg-slate-950/40 rounded-xl border border-white/5 cursor-pointer hover:border-brandOrange/40 transition-colors select-none";
      // Reset circle mark
      const circle = opt.querySelector('span:first-child');
      circle.className = "w-5 h-5 rounded-full border border-white/20 flex items-center justify-center font-mono text-xs text-slate-400";
    }
  }

  // Highlight selected option
  const selectedOpt = document.getElementById(`opt-${index}`);
  if (selectedOpt) {
    selectedOpt.className = "flex items-center gap-3 p-4 bg-brandOrange/15 rounded-xl border border-brandOrange cursor-pointer transition-colors select-none";
    const selectedCircle = selectedOpt.querySelector('span:first-child');
    selectedCircle.className = "w-5 h-5 rounded-full bg-brandOrange text-white flex items-center justify-center font-mono text-xs font-bold";
  }
}

async function runQuizGrading() {
  if (selectedQuizAnswer === null) {
    alert("퀴즈 정답 번호를 먼저 선택해 주세요!");
    return;
  }

  const resultBox = document.getElementById('quizResultArea'); // Fixed ID from index.html
  resultBox.classList.remove('hidden');
  resultBox.innerHTML = `
    <div class="flex items-center gap-2 text-slate-500 mb-2">
      <div class="w-1.5 h-1.5 rounded-full bg-brandOrange animate-ping"></div>
      <span class="font-mono text-[10px]">Gemini AI가 실시간으로 채점과 해설을 불러오는 중...</span>
    </div>`;

  const userExplanation = document.getElementById('quizExplanation').value.trim();
  const questionText = "Q. SSR 방식으로 서빙된 정적 HTML 문서에 자바스크립트 이벤트 바인딩을 부착하여 동적으로 기능하게 만드는 과정을 무엇이라 부르나요?";
  
  const prompt = `프론트엔드 교안 퀴즈 채점 시스템입니다.
질문: ${questionText}
사용자가 고른 보기 번호: ${selectedQuizAnswer}번 (정답은 3번: Hydration)
사용자가 추가 서술한 해설: "${userExplanation || '없음'}"

이에 대해 정답 여부를 위트 있게 밝히고, 왜 3번 Hydration(하이드레이션)이 맞는지, 그리고 1,2,4번 보기의 개념이 각각 무엇인지 간략하고 알기 쉽게 피드백 해설을 적어주세요. 
답변 어투는 친근한 오디세이 강사(Mokpo AI Lab) 톤으로 정성스럽게 피드백해 주십시오.`;

  // Call Gemini API Placeholder function
  try {
    const feedback = await askGeminiAPI(prompt);
    resultBox.innerHTML = `
      <div class="text-brandOrange font-mono text-[10px] mb-1">Gemini AI 실시간 채점 분석 결과:</div>
      <div class="text-slate-100">${feedback.replace(/\n/g, '<br/>')}</div>
    `;
  } catch (err) {
    resultBox.innerHTML = `<span class="text-red-400">Gemini API 연동 중 오류 발생: ${err.message}</span>`;
  }
}

// =========================================================================
// [Gemini AI API 호출 연동 함수 플레이스홀더]
// =========================================================================
async function askGeminiAPI(prompt) {
  // 로컬 Mock 응답 예시 (API Key 미연동 상태일 때 작동하는 디폴트 콜백)
  return new Promise((resolve) => {
    setTimeout(() => {
      let evaluation = "";
      if (selectedQuizAnswer === 3) {
        evaluation = "🎉 **정답입니다! 완벽해요!**<br/>";
      } else {
        evaluation = "😢 **아쉽지만 오답입니다!** (선택하신 번호: " + selectedQuizAnswer + "번)<br/>";
      }
      
      resolve(evaluation + `
오디세이 강사의 족집게 해설 들어갑니다! 
정답은 **3번 Hydration (하이드레이션)**입니다. 

- **Hydration(하이드레이션)**은 서버가 렌더링해 놓은 '바싹 마른 뼈대'인 정적 HTML 문서에 자바스크립트 기능(수분)을 스며들게 결합하여 살아있는 인터랙티브 앱으로 재정렬하는 멋진 과정입니다.
- **Reflow(리플로우)**는 화면 레이아웃의 크기나 크래시가 바뀌었을 때 브라우저 엔진이 픽셀 좌표를 재계산하는 무거운 그래픽 단계입니다.
- **Transpiling(트랜스파일링)**은 최신 자바스크립트 문법(ES6+)을 브라우저 호환성이 좋은 옛 자바스크립트 표준(ES5)으로 자동 번역해 주는 과정입니다.
- **Tree Shaking(트리 쉐이킹)**은 안 쓰는 잉여 코드를 흔들어서 배포 번들에서 가지치기하는 빌드 최적화 단계입니다.
 
열심히 지도의 끝까지 도달하셨군요! 수고하셨습니다. 🔥`);
    }, 1500);
  });
}

// ==========================================
// 🚀 OPTION A: 3 INLINE CONCEPT SIMULATORS
// ==========================================

// 1. Netlify Delivery Simulator
function initNetlifyAnimation() {
  const container = document.getElementById('netlify-anim-container');
  if (!container) return;
  
  container.innerHTML = `
    <div class="flex items-center justify-between w-full max-w-md px-8 relative">
      <!-- Local PC -->
      <div class="flex flex-col items-center z-10">
        <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-black/5 dark:border-white/10 shadow-sm text-slate-600 dark:text-slate-300">
          <i data-lucide="laptop" class="w-6 h-6"></i>
        </div>
        <span class="text-[9px] font-bold text-slate-400 mt-1.5">로컬 컴퓨터</span>
      </div>
      
      <!-- Delivery Path Line -->
      <div class="absolute left-20 right-20 top-8 h-0.5 border-t-2 border-dashed border-slate-300 dark:border-slate-700"></div>
      
      <!-- Flying Packet -->
      <div id="netlify-packet" class="absolute left-16 top-5 p-1.5 bg-brandOrange text-white rounded-lg shadow-md transition-all duration-1000 ease-out opacity-0 z-20">
        <i data-lucide="mail" class="w-4 h-4"></i>
      </div>

      <!-- Cloud (Internet) -->
      <div class="flex flex-col items-center z-10">
        <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-black/5 dark:border-white/10 shadow-sm text-sky-400">
          <i data-lucide="cloud" class="w-6 h-6"></i>
        </div>
        <span class="text-[9px] font-bold text-slate-400 mt-1.5">인터넷 (도로망)</span>
      </div>

      <!-- Netlify Server -->
      <div class="flex flex-col items-center z-10">
        <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-black/5 dark:border-white/10 shadow-sm text-emerald-500">
          <i data-lucide="server" class="w-6 h-6"></i>
        </div>
        <span class="text-[9px] font-bold text-slate-400 mt-1.5">Netlify (배포 서버)</span>
      </div>
    </div>
  `;
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

let isNetlifyAnimating = false;
function triggerNetlifyAnimation() {
  if (isNetlifyAnimating) return;
  isNetlifyAnimating = true;

  const packet = document.getElementById('netlify-packet');
  const status = document.getElementById('netlify-anim-status');
  if (!packet || !status) {
    isNetlifyAnimating = false;
    return;
  }

  // Step 1: Initialize Position (At Local PC)
  packet.style.transition = 'none';
  packet.style.left = '45px';
  packet.style.opacity = '1';
  status.innerText = "전송 대기 중...";
  status.className = "font-bold text-brandOrange";

  setTimeout(() => {
    // Step 2: Fly to Internet Cloud
    packet.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    packet.style.left = '200px';
    status.innerText = "도로망을 통해 전송 중... 🚚";
    status.className = "font-bold text-sky-400 animate-pulse";

    setTimeout(() => {
      // Step 3: Fly to Netlify Server
      packet.style.left = '355px';
      status.innerText = "서버 빌드 및 주소 부여 중... ⚙️";
      status.className = "font-bold text-yellow-500 animate-pulse";

      setTimeout(() => {
        // Step 4: Finish Deploy
        packet.style.opacity = '0';
        status.innerText = "배포 완료! (https://danggeun.netlify.app) 🎉";
        status.className = "font-bold text-emerald-500";
        isNetlifyAnimating = false;
        
        if (typeof playToggleSound === 'function') playToggleSound('click');
        
        // Trigger small confetti bubble burst
        if (typeof triggerConfetti === 'function') triggerConfetti();
      }, 1000);
    }, 1000);
  }, 100);
}

// 2. DESIGN.md Separation Simulator
function initDesignMdSeparation() {
  const container = document.getElementById('design-md-separation-container');
  if (!container) return;

  container.innerHTML = `
    <div id="design-mock-page" class="w-72 p-5 bg-white text-black font-serif border border-slate-300 text-left transition-all duration-500 rounded-none space-y-3 shadow-md">
      <h5 id="design-mock-title" class="text-sm font-bold border-b border-black pb-1 transition-all">김초보의 명함</h5>
      <p id="design-mock-body" class="text-[10px] leading-relaxed transition-all text-slate-700">안녕하세요, 프론트엔드 개발자 지망생 김초보입니다. HTML과 CSS를 분리하는 법을 배웠습니다.</p>
      <div id="design-mock-badge" class="inline-block text-[8px] bg-slate-200 px-2 py-0.5 rounded-none font-mono transition-all text-slate-600">STATUS: HTML ONLY</div>
    </div>
  `;
}

let isDesignStyled = false;
function triggerDesignMdSeparation() {
  const card = document.getElementById('design-mock-page');
  const title = document.getElementById('design-mock-title');
  const body = document.getElementById('design-mock-body');
  const badge = document.getElementById('design-mock-badge');
  const status = document.getElementById('design-anim-status');

  if (!card || !title || !body || !badge || !status) return;

  isDesignStyled = !isDesignStyled;
  if (typeof playToggleSound === 'function') playToggleSound('click');

  if (isDesignStyled) {
    // Apply styled theme variables (warm-beige design tokens)
    card.style.backgroundColor = '#f8f4ed';
    card.style.borderColor = '#FF7E36';
    card.style.borderRadius = '16px';
    card.style.fontFamily = "'Pretendard', sans-serif";
    card.style.color = '#191F28';
    
    title.style.fontFamily = "'Outfit', sans-serif";
    title.style.color = '#FF7E36';
    title.style.borderColor = 'rgba(255, 126, 54, 0.15)';
    
    body.style.color = '#4E5968';
    
    badge.innerText = "STATUS: DESIGN.md APPLIED";
    badge.className = "inline-block text-[8px] bg-seed-orange-light text-seed-orange-dark px-2 py-0.5 rounded-full font-mono font-bold";
    
    status.innerText = "디자인 토큰 주입 완료! 🎨";
    status.className = "font-bold text-brandOrange";
  } else {
    // Reset to plain HTML
    card.style.backgroundColor = '#ffffff';
    card.style.borderColor = '#cbd5e1';
    card.style.borderRadius = '0px';
    card.style.fontFamily = 'Georgia, serif';
    card.style.color = '#000000';
    
    title.style.fontFamily = 'Georgia, serif';
    title.style.color = '#000000';
    title.style.borderColor = '#000000';
    
    body.style.color = '#334155';
    
    badge.innerText = "STATUS: HTML ONLY";
    badge.className = "inline-block text-[8px] bg-slate-200 text-slate-600 px-2 py-0.5 rounded-none font-mono";
    
    status.innerText = "HTML ONLY (뼈대 상태)";
    status.className = "font-bold text-slate-400";
  }
}

// 3. JS SVG Coordinate Tracker
function initJsTrackingAnimation() {
  const container = document.getElementById('js-svg-tracking-container');
  if (!container) return;

  container.innerHTML = `
    <div class="w-full h-full relative cursor-crosshair flex items-center justify-center bg-slate-900 rounded-2xl overflow-hidden border border-white/5" id="js-tracker-area">
      <!-- Glow Target Dot -->
      <div id="js-tracker-dot" class="absolute w-4 h-4 rounded-full bg-brandOrange/80 border border-white shadow-[0_0_12px_#FF7E36] pointer-events-none transition-all duration-75" style="left: 50%; top: 50%; transform: translate(-50%, -50%);"></div>
      
      <!-- SVG path generator -->
      <svg class="absolute inset-0 w-full h-full pointer-events-none">
        <path id="js-tracker-path" d="" stroke="#FF7E36" stroke-width="2" stroke-dasharray="4,4" fill="none" />
      </svg>
      <span class="text-[10px] text-slate-500 pointer-events-none select-none">이 카드 영역 위에서 마우스를 이리저리 움직여보세요</span>
    </div>
  `;

  const trackerArea = document.getElementById('js-tracker-area');
  const dot = document.getElementById('js-tracker-dot');
  const path = document.getElementById('js-tracker-path');
  const coordX = document.getElementById('js-coord-x');
  const coordY = document.getElementById('js-coord-y');

  if (!trackerArea || !dot || !path) return;

  trackerArea.addEventListener('mousemove', (e) => {
    const rect = trackerArea.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);
    
    if (coordX) coordX.innerText = x;
    if (coordY) coordY.innerText = y;

    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;

    // Draw interactive SVG line from center to cursor coordinates
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    path.setAttribute('d', `M ${centerX} ${centerY} Q ${centerX + (x - centerX)/2} ${centerY - 30} ${x} ${y}`);
  });

  trackerArea.addEventListener('mouseenter', () => {
    if (typeof playToggleSound === 'function') playToggleSound('hover');
  });
}

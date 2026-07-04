// 목포 AI 실험실 - 슬라이드 구동 핵심 스크립트 (main.js)

const slideLabels = [
  "프론트엔드 배움의 지도",
  "웹의 시초 - 팀 버너스리",
  "인터넷 vs 웹 - 도로와 택배",
  "[실습] 첫 HTTP 요청",
  "HTML - 정보의 뼈대 세우기",
  "CSS - 디자인의 독립 선언",
  "[실습] 첫 CSS 박스 다듬기",
  "JS - 웹에 영혼 불어넣기",
  "[실습] 동적 DOM 조작해보기",
  "브라우저 동작 - 파싱과 트리",
  "브라우저 성능 - 리플로우/페인트",
  "[실습] 렌더링 성능 최적화",
  "웹 격동기 - jQuery에서 React로",
  "React - 컴포넌트와 선언형 UI",
  "웹 조립 공장 - Node.js와 npm",
  "배포 준비 - 트랜스파일/번들링",
  "사용자 경험 - SPA의 등장",
  "첫 속도 극복 - SSR과 하이드레이션",
  "[실습] 1단계: DESIGN.md 빌더",
  "[실습] 2단계: HTML 프롬프트 빌더",
  "AI 종합 퀴즈"
];

let currentSlideIndex = 0;
let isTransitioning = false;

// Global Error Diagnostic Overlay
window.onerror = function(message, source, lineno, colno, error) {
  const errDiv = document.createElement('div');
  errDiv.style.position = 'fixed';
  errDiv.style.top = '0';
  errDiv.style.left = '0';
  errDiv.style.width = '100%';
  errDiv.style.zIndex = '99999';
  errDiv.style.backgroundColor = '#FF3B30';
  errDiv.style.color = '#FFFFFF';
  errDiv.style.padding = '20px';
  errDiv.style.fontFamily = 'monospace';
  errDiv.style.fontSize = '14px';
  errDiv.style.lineHeight = '1.6';
  errDiv.style.borderBottom = '5px solid #8B0000';
  errDiv.style.boxShadow = '0 5px 15px rgba(0,0,0,0.5)';
  
  errDiv.innerHTML = `
    <div style="font-weight:bold;font-size:16px;margin-bottom:8px;">⚠️ [목포 AI 실험실] 프론트엔드 런타임 에러 발생</div>
    <div><strong>오류 메시지:</strong> ${message}</div>
    <div><strong>위치:</strong> ${source} (Line ${lineno}, Col ${colno})</div>
    <div style="margin-top:12px;font-size:12px;opacity:0.9;border-top:1px solid rgba(255,255,255,0.3);padding-top:8px;">
      💡 <strong>조치 제안:</strong> 브라우저 캐시 문제일 가능성이 높습니다. 
      키보드 <strong>Ctrl + F5</strong> 또는 <strong>F12 개발자도구를 켠 뒤 새로고침 버튼 우클릭 -> 캐시 비우기 및 강력 새로고침</strong>을 실행해 보세요.
    </div>
  `;
  document.body.appendChild(errDiv);
  return false;
};

// Update Side Navigation indicators & active node styling
function updateIndicators(prev, curr) {
  curriculum.forEach((slide, index) => {
    const label = document.getElementById("label-" + index);
    const node = document.getElementById("node-" + index);
    
    if (label && node) {
      if (index === curr) {
        label.classList.add('active-nav');
        node.className = "absolute bg-brandOrange border-2 border-brandOrange w-3.5 h-3.5 rounded-full transition-all duration-300 z-10";
        node.style.left = "-31.5px";
      } else {
        label.classList.remove('active-nav');
        if (index === 20) {
          node.className = "absolute bg-slate-950 border-2 border-brandOrange/60 w-3 h-3 rounded-full transition-all group-hover:border-brandOrange animate-pulse z-10";
          node.style.left = "-31px";
        } else if (index === 0 || index === 18 || index === 19) {
          node.className = "absolute bg-slate-950 border-2 border-white/20 w-2.5 h-2.5 rounded-full transition-all group-hover:border-brandOrange z-10";
          node.style.left = "-31px";
        } else {
          node.className = "absolute bg-slate-950 border border-white/20 w-2 h-2 rounded-full transition-all group-hover:border-brandOrange z-10";
          node.style.left = "-30px";
        }
        node.style.transform = "";
      }
    }
  });

  // Update active timeline line height dynamically based on active element
  const activeTraceLine = document.getElementById('active-trace-line');
  const activeLabel = document.getElementById("label-" + curr);
  if (activeTraceLine && activeLabel) {
    const itemWrapper = activeLabel.parentElement;
    const lineTop = itemWrapper.offsetTop + (itemWrapper.offsetHeight / 2);
    activeTraceLine.style.height = lineTop + "px";
  }

  // Smoothly sync/scroll the sidebar timeline to keep active item centered
  const scrollContainer = document.getElementById('sidebar-timeline-scroll-container');
  if (scrollContainer && activeLabel) {
    const containerHeight = scrollContainer.clientHeight;
    const itemWrapper = activeLabel.parentElement;
    const labelTop = itemWrapper.offsetTop;
    const labelHeight = itemWrapper.clientHeight;
    
    scrollContainer.scrollTo({
      top: labelTop - containerHeight / 2 + labelHeight / 2,
      behavior: 'smooth'
    });
  }

  // Update progress bar
  const progress = document.getElementById('scroll-progress');
  if (progress) {
    const pct = ((curr + 1) / curriculum.length) * 100;
    progress.style.width = pct + "%";
  }

  // Update page counter fraction
  const fraction = document.getElementById('slide-fraction');
  if (fraction) {
    fraction.innerText = (curr + 1) + " / " + curriculum.length;
  }
}

// Bulletproof Slide Transition Function
function goToSlide(targetIndex) {
  if (targetIndex < 0 || targetIndex >= curriculum.length || isTransitioning) return;
  isTransitioning = true;

  const previousIndex = currentSlideIndex;
  currentSlideIndex = targetIndex;

  // Update Index indicator
  updateIndicators(previousIndex, targetIndex);

  const prevSlideId = `slide-${curriculum[previousIndex].id}`;
  const nextSlideId = `slide-${curriculum[targetIndex].id}`;
  
  const prevEl = document.getElementById(prevSlideId);
  const nextEl = document.getElementById(nextSlideId);

  if (prevEl && nextEl) {
    // Hide previous and show next cleanly
    prevEl.classList.remove('slide-active');
    nextEl.classList.add('slide-active');
  }

  setTimeout(() => {
    isTransitioning = false;
  }, 300);
}

function nextSlide() {
  if (currentSlideIndex < curriculum.length - 1) {
    goToSlide(currentSlideIndex + 1);
  }
}

function prevSlide() {
  if (currentSlideIndex > 0) {
    goToSlide(currentSlideIndex - 1);
  }
}

// ==========================================
// SIDEBAR TOGGLE PANEL
// ==========================================
let sidebarOpen = true;
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar-panel');
  const toggleIcon = document.getElementById('sidebar-toggle-icon');
  const viewport = document.getElementById('viewport-main');

  if (sidebarOpen) {
    sidebar.style.width = '0px';
    sidebar.style.padding = '0px';
    sidebar.style.opacity = '0';
    setTimeout(() => {
      sidebar.classList.add('hidden');
    }, 300);
    
    toggleIcon.setAttribute('data-lucide', 'chevron-right');
    document.body.classList.add('sidebar-closed');
    viewport.classList.remove('pl-16');
    viewport.classList.add('pl-20');
    sidebarOpen = false;
  } else {
    sidebar.classList.remove('hidden');
    setTimeout(() => {
      sidebar.style.width = '';
      sidebar.style.padding = '';
      sidebar.style.opacity = '1';
    }, 10);
    
    toggleIcon.setAttribute('data-lucide', 'chevron-left');
    document.body.classList.remove('sidebar-closed');
    viewport.classList.remove('pl-20');
    viewport.classList.add('pl-16');
    sidebarOpen = true;
  }
  setTimeout(() => {
    lucide.createIcons();
  }, 50);
}

// ==========================================
// KARROT DRAWER
// ==========================================
function openKarrotDrawer() {
  document.getElementById('karrot-drawer').style.transform = 'translateX(0)';
}

function closeKarrotDrawer() {
  document.getElementById('karrot-drawer').style.transform = 'translateX(100%)';
}

function highlightCodeBlocks() {
  document.querySelectorAll('pre code').forEach(codeBlock => {
    let text = codeBlock.textContent;
    // Escape HTML tags to prevent XSS/rendering issues
    let escaped = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    
    // Replace syntax tokens
    let highlighted = escaped
      // Keywords
      .replace(/\b(const|let|var|function|return|if|else|for|while|import|export|from|class|extends|new|try|catch|async|await)\b/g, '<span class="code-keyword">$1</span>')
      // Built-ins
      .replace(/\b(document|window|console|localStorage|fetch|response|JSON|alert)\b/g, '<span class="code-builtin">$1</span>')
      // Numbers
      .replace(/\b(\d+)\b/g, '<span class="code-number">$1</span>')
      // Strings (single/double quotes / backticks)
      .replace(/(["'`])(.*?)\1/g, '<span class="code-string">$1$2$1</span>')
      // Comments (//)
      .replace(/(\/\/.*)/g, '<span class="code-comment">$1</span>');
      
    codeBlock.innerHTML = highlighted;
  });
}

// Wait until DOM is fully loaded to render slides and bind event listeners
window.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Slide Generation inside viewport
  const viewport = document.getElementById('viewport-main');
  if (viewport) {
    viewport.innerHTML = ''; // Clear default template sections
    curriculum.forEach((slide, index) => {
      const section = document.createElement('section');
      section.id = `slide-${slide.id}`;
      section.className = `slide-stage ${slide.classes}`;
      if (index === 0) {
        section.classList.add('slide-active');
      }
      section.innerHTML = slide.contentHtml;
      viewport.appendChild(section);
    });
    
    // Invoke syntax highlighting
    highlightCodeBlocks();
  }

  // 2. Dynamic Timeline Generation inside sidebar
  const timelineWrapper = document.getElementById('timeline-wrapper');
  if (timelineWrapper) {
    // Save active trace line element
    const activeTrace = document.getElementById('active-trace-line');
    timelineWrapper.innerHTML = '';
    if (activeTrace) {
      timelineWrapper.appendChild(activeTrace);
    } else {
      // Recreate if missing
      const newTrace = document.createElement('div');
      newTrace.id = 'active-trace-line';
      newTrace.className = "absolute left-[-1.5px] top-0 w-[2.5px] bg-brandOrange transition-all duration-300";
      newTrace.style.height = "24px";
      newTrace.style.filter = "drop-shadow(0 0 6px rgba(255, 107, 53, 0.65))";
      timelineWrapper.appendChild(newTrace);
    }

    // Append dynamic links
    slideLabels.forEach((label, index) => {
      const item = document.createElement('div');
      item.onclick = () => goToSlide(index);
      item.className = "relative py-2.5 cursor-pointer group flex items-center min-h-[44px]";
      
      // Node styling based on slide index
      let nodeClass = "absolute left-[-30px] w-2 h-2 rounded-full bg-slate-950 border border-white/20 transition-all group-hover:border-brandOrange z-10";
      if (index === 0 || index === 18 || index === 19) {
        nodeClass = "absolute left-[-30px] w-2.5 h-2.5 rounded-full bg-slate-950 border-2 border-white/20 transition-all group-hover:border-brandOrange z-10";
      } else if (index === 20) {
        nodeClass = "absolute left-[-31px] w-3 h-3 rounded-full bg-slate-950 border-2 border-brandOrange/60 transition-all group-hover:border-brandOrange animate-pulse z-10";
      }
      
      const nodeDiv = document.createElement('div');
      nodeDiv.id = `node-${index}`;
      nodeDiv.className = nodeClass;
      item.appendChild(nodeDiv);
      
      const labelDiv = document.createElement('div');
      labelDiv.id = `label-${index}`;
      
      if (index === 20) {
        labelDiv.className = "text-[13px] font-black text-brandOrange hover:text-brandOrangeLight transition-colors flex items-center gap-1 leading-tight w-full";
        labelDiv.innerHTML = `<i data-lucide="sparkles" class="w-3.5 h-3.5 shrink-0"></i> AI 종합 퀴즈 <span class="text-[9px] text-brandOrange/75 font-mono ml-auto tracking-widest shrink-0 pl-2">p. 21</span>`;
      } else {
        labelDiv.className = "text-[13px] font-black text-slate-400 group-hover:text-white transition-colors leading-tight flex items-center w-full";
        labelDiv.innerHTML = `${label} <span class="text-[9px] text-brandOrange/75 font-mono ml-auto tracking-widest shrink-0 pl-2">p. ${index + 1}</span>`;
      }
      
      item.appendChild(labelDiv);
      timelineWrapper.appendChild(item);
    });
  }

  // 3. Initialize Lucide Icons
  try {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  } catch (err) {
    console.error("Lucide icons failed:", err);
  }

  // 4. Initialize Lottie Bunny Animation
  try {
    if (typeof lottie !== 'undefined') {
      const lottieContainer = document.getElementById('bunny-lottie-container');
      if (lottieContainer) {
        lottieContainer.innerHTML = '';
        
        // Use global bunnyLottieJson variable loaded from js/bunny_data.js
        if (typeof bunnyLottieJson !== 'undefined') {
          lottie.loadAnimation({
            container: lottieContainer,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: bunnyLottieJson
          });
          console.log("Lottie Bunny successfully loaded from bunny_data.js");
        } else {
          // Fallback to fetch assets/bunny.json if global variable is missing
          lottie.loadAnimation({
            container: lottieContainer,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'assets/bunny.json'
          });
          console.log("Lottie Bunny fallback loaded from assets/bunny.json");
        }
      }
    }
  } catch (err) {
    console.warn("Lottie bunny failed to load cleanly:", err);
  }

  // 5. Set Initial Navigation State and Prompts
  updateIndicators(0, 0);
  if (typeof updateStep1Prompt === 'function') updateStep1Prompt();
  if (typeof updateStep2Prompt === 'function') updateStep2Prompt();

  // 6. Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return;
    if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
      e.preventDefault();
      nextSlide();
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault();
      prevSlide();
    }
  });

  // 7. Throttled mouse wheel navigation
  let lastWheelTime = 0;
  const viewportMain = document.getElementById('viewport-main');
  if (viewportMain) {
    viewportMain.addEventListener('wheel', (e) => {
      if (isTransitioning) return;
      const now = Date.now();
      if (now - lastWheelTime < 1200) return;
      if (e.deltaY > 10) {
        nextSlide();
        lastWheelTime = now;
      } else if (e.deltaY < -10) {
        prevSlide();
        lastWheelTime = now;
      }
    });
  }

  // 8. Sidebar Lerp Cursor Tracker
  let targetY = 0;
  let currentY = 0;
  const tracker = document.getElementById('cursor-tracker');
  const timelineContainer = document.getElementById('sidebar-timeline-container');

  if (timelineContainer) {
    timelineContainer.addEventListener('mousemove', (e) => {
      const rect = timelineContainer.getBoundingClientRect();
      targetY = e.clientY - rect.top;
      if (tracker) tracker.setAttribute('opacity', '1');
    });

    timelineContainer.addEventListener('mouseleave', () => {
      if (tracker) tracker.setAttribute('opacity', '0');
    });
  }

  function animateTracker() {
    currentY += (targetY - currentY) * 0.15; // smooth damping
    if (tracker) {
      tracker.setAttribute('y1', currentY);
      tracker.setAttribute('y2', currentY);
    }
    requestAnimationFrame(animateTracker);
  }
  animateTracker();
});

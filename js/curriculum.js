// 목포 AI 실험실 - 4차시 교안 수업 컨텐츠 데이터 정의 파일
const curriculum = [
  {
    id: "intro",
    classes: "p-8 md:p-16 lg:p-24 flex flex-col justify-center overflow-y-auto",
    contentHtml: `<div class="max-w-[960px] space-y-8 w-full mx-auto">
          <span class="text-xs font-outfit uppercase tracking-[0.25em] text-brandOrange block">01 / INTRODUCTION</span>
          <h2 class="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white font-display tracking-tight leading-none">
            프론트엔드 배움의 지도
          </h2>
          <div class="w-24 h-[3.5px] bg-brandOrange/75 my-6"></div>
          <div class="text-base md:text-[18px] lg:text-[20px] text-slate-200 space-y-6 leading-[1.9] font-body font-light">
            <p>
              안녕하세요! 목포 AI 실험실 강사 <strong>오디세이</strong>입니다. 
              우리가 AI 코딩 환경(Cursor, v0, Gemini 등)에서 고성능의 웹 애플리케이션을 완성도 높게 찍어내기 위해선, 무작정 프롬프트만 던지는 것을 넘어 <strong>웹의 흐름과 역사적 배경, 그리고 브라우저 렌더링 메커니즘</strong>을 명확하게 꿰뚫고 있어야 합니다.
            </p>
            <p>
              AI는 우리가 제공하는 디자인 명세(DESIGN.md)와 마크업 기술 명칭을 기반으로 결과 코드를 생성합니다. 우리가 프론트엔드의 기본 원리를 깊이 있게 알고 명확한 언어로 지시를 내리면, AI 비서가 짜주는 결과물의 퀄리티와 신뢰도가 180도 달라집니다.
            </p>
            <div class="p-8 bg-orange-950/15 border-l-4 border-brandOrange rounded-r-3xl text-orange-200 font-semibold shadow-xl text-base md:text-lg leading-relaxed">
              🚀 이 과정은 단순한 텍스트 나열을 넘어 브라우저 렌더링, 스타일 적용, DOM 조작 과정을 <strong>직접 체감할 수 있는 6가지의 실습</strong>과 <strong>Gemini AI 실시간 채점 시스템</strong>으로 구성되어 있습니다. 자, 함께 지도의 첫 문을 열어봅시다!
            </div>
          </div>
        </div>`
  },
  {
    id: "web-origin",
    classes: "p-8 md:p-12 xl:p-16 flex flex-col justify-center overflow-y-auto",
    contentHtml: `<div class="max-w-[1360px] w-full mx-auto space-y-6">
          <span class="text-xs font-outfit uppercase tracking-[0.25em] text-brandOrange block">02 / WEB ORIGIN</span>
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            <!-- Left Info -->
            <div class="lg:col-span-7 space-y-5 flex flex-col justify-center">
              <h2 class="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white font-display tracking-tight leading-none">
                웹의 시초: 팀 버너스리의 제안
              </h2>
              <div class="w-20 h-[3px] bg-brandOrange/70"></div>
              <div class="text-sm md:text-base xl:text-[17px] text-slate-200 space-y-4 leading-[1.8] font-body font-light">
                <p>
                  1989년, 스위스 유럽입자물리연구소(CERN)의 연구원이었던 <strong>팀 버너스리(Tim Berners-Lee)</strong>는 극심한 업무 지연에 시달렸습니다. 수천 명의 세계 석학들이 작성한 논문과 실험 데이터들이 호환되지 않는 각기 다른 규격의 컴퓨터 시스템 속에 잠겨있어 자료 공유가 극도로 비효율적이었기 때문입니다.
                </p>
                <p>
                  그는 문서 속 단어(Anchor)를 마우스로 클릭하면, 거리에 구애받지 않고 지구 반대편의 컴퓨터에 저장된 다른 논문 파일로 즉시 점프할 수 있는 <strong>하이퍼텍스트(Hypertext)</strong> 연계 모델을 창안했습니다. 이것이 정보의 촘촘한 거미줄, <span class="concept-badge">World Wide Web</span>의 첫 설계도였습니다.
                </p>
              </div>
              <div class="p-4.5 bg-slate-900 border border-white/5 rounded-xl text-slate-350 text-xs md:text-sm">
                💡 <strong>오디세이의 멘토링:</strong> 최초의 웹은 현란한 화면을 띄우기 위해서가 아니라, "세계 각지의 이기종 컴퓨터들에 산재한 학술 텍스트 문서를 클릭 한 번으로 편하게 오가기 위해" 탄생한 배송 인프라였습니다.
              </div>
            </div>

            <!-- Right Concept Callout (SVG Web Illustration + 3 Core Tech) -->
            <div class="lg:col-span-5 p-6 concept-card rounded-3xl flex flex-col justify-between shadow-2xl relative overflow-hidden noise-bg space-y-6">
              <div class="space-y-3">
                <h4 class="text-xs font-black tracking-wider text-brandOrange uppercase">하이퍼텍스트 문서 연결망 (CERN 1989 Model)</h4>
                
                <!-- SVG Interactive Node Map -->
                <div class="bg-slate-950/80 rounded-2xl p-4 border border-white/5 relative overflow-hidden flex items-center justify-center h-48 select-none">
                  <svg class="w-full h-full" viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
                    <!-- Grid background lines -->
                    <defs>
                      <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.02)" stroke-width="1"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                    
                    <!-- Connection Lines -->
                    <path d="M 80 50 L 200 90" stroke="rgba(255, 107, 53, 0.4)" stroke-width="1.5" stroke-dasharray="4,4" />
                    <path d="M 200 90 L 320 50" stroke="rgba(255, 107, 53, 0.4)" stroke-width="1.5" stroke-dasharray="4,4" />
                    <path d="M 80 130 L 200 90" stroke="rgba(16, 185, 129, 0.4)" stroke-width="1.5" />
                    <path d="M 200 90 L 320 130" stroke="rgba(16, 185, 129, 0.4)" stroke-width="1.5" />
                    
                    <!-- Document Node 1 (CERN Server) -->
                    <g transform="translate(40, 30)" class="cursor-pointer group">
                      <rect width="80" height="40" rx="8" fill="#111" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" class="transition-colors group-hover:stroke-brandOrange" />
                      <text x="40" y="24" fill="#888" font-size="10" font-family="'Inter'" text-anchor="middle">Document A</text>
                      <circle cx="80" cy="20" r="3.5" fill="#FF6B35" class="animate-pulse" />
                    </g>
                    
                    <!-- Document Node 2 (CERN Server - Target) -->
                    <g transform="translate(160, 70)" class="cursor-pointer group">
                      <rect width="80" height="40" rx="8" fill="#111" stroke="#FF6B35" stroke-width="2" />
                      <text x="40" y="24" fill="#FFF" font-weight="bold" font-size="10" font-family="'Inter'" text-anchor="middle">HTTP Link</text>
                      <circle cx="0" cy="20" r="3.5" fill="#FF6B35" />
                      <circle cx="80" cy="20" r="3.5" fill="#10B981" />
                    </g>
                    
                    <!-- Document Node 3 -->
                    <g transform="translate(280, 30)" class="cursor-pointer group">
                      <rect width="80" height="40" rx="8" fill="#111" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" class="transition-colors group-hover:stroke-brandOrange" />
                      <text x="40" y="24" fill="#888" font-size="10" font-family="'Inter'" text-anchor="middle">Document B</text>
                      <circle cx="0" cy="20" r="3.5" fill="#FF6B35" />
                    </g>

                    <!-- Text Annotations -->
                    <text x="200" y="145" fill="#10B981" font-size="9" font-family="'Pretendard'" text-anchor="middle" font-weight="bold">인터넷 망 위에 구현된 하이퍼텍스트 연결망</text>
                    <text x="200" y="160" fill="#666" font-size="8" font-family="'Pretendard'" text-anchor="middle">노드를 클릭하면 즉시 주소(URL)를 해석해 파일 수신</text>
                  </svg>
                </div>
              </div>

              <div class="space-y-2">
                <h4 class="text-xs font-black tracking-wider text-slate-400 uppercase">초기 WWW의 3대 근간 기술</h4>
                <div class="grid grid-cols-3 gap-2">
                  <div class="p-3 bg-slate-950 border border-white/5 rounded-xl hover:border-brandOrange/30 transition-colors">
                    <strong class="text-[11px] font-extrabold text-white block mb-0.5">1. HTML</strong>
                    <span class="text-[9px] text-slate-500 leading-tight block">문서 서식 포맷</span>
                  </div>
                  <div class="p-3 bg-slate-950 border border-white/5 rounded-xl hover:border-brandOrange/30 transition-colors">
                    <strong class="text-[11px] font-extrabold text-white block mb-0.5">2. HTTP</strong>
                    <span class="text-[9px] text-slate-500 leading-tight block">통신 규격 약속</span>
                  </div>
                  <div class="p-3 bg-slate-950 border border-white/5 rounded-xl hover:border-brandOrange/30 transition-colors">
                    <strong class="text-[11px] font-extrabold text-white block mb-0.5">3. URL</strong>
                    <span class="text-[9px] text-slate-500 leading-tight block">물리적 주소 좌표</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>`
  },
  {
    id: "internet-web",
    classes: "p-8 md:p-12 xl:p-16 flex flex-col justify-center overflow-y-auto",
    contentHtml: `<div class="max-w-[1360px] w-full mx-auto space-y-6">
          <span class="text-xs font-outfit uppercase tracking-[0.25em] text-brandOrange block">03 / NETWORK VS SERVICE</span>
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            <!-- Left Info -->
            <div class="lg:col-span-6 space-y-5 flex flex-col justify-center">
              <h2 class="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white font-display tracking-tight leading-none">
                인터넷 vs 웹: 도로와 택배
              </h2>
              <div class="w-20 h-[3px] bg-brandOrange/70"></div>
              <div class="text-sm md:text-base xl:text-[17px] text-slate-200 space-y-4 leading-[1.8] font-body font-light">
                <p>
                  많은 사람들이 "인터넷"과 "웹"을 같은 의미로 혼합해 부르곤 합니다. 하지만 기술 관점에서 이 둘은 엄연히 계층과 목적이 완전히 다른 대상입니다.
                </p>
                <p>
                  <span class="concept-badge">Internet</span>은 전 세계의 컴퓨터들이 광케이블, 위성망, 무선 안테나를 통해 한데 엉켜 신호를 보낼 수 있게 설계된 물리적인 <strong>망(Network) 인프라</strong> 자체입니다.
                </p>
                <p>
                  반면 <span class="concept-badge">Web</span>은 인터넷이라는 연결망 위에서 데이터를 실어 나르는 수많은 응용 서비스(이메일, FTP, 파일 공유 등) 중 하나에 속하며, <strong>텍스트와 하이퍼텍스트를 규격화해서 주고받는 소프트웨어 레이어</strong>입니다.
                </p>
              </div>
            </div>

            <!-- Right Visual Table and Bento Grid (SVG Illustration + Table) -->
            <div class="lg:col-span-6 flex flex-col justify-center gap-4 p-2">
              
              <!-- SVG Road & Delivery Illustration -->
              <div class="concept-card rounded-3xl p-4 shadow-2xl relative overflow-hidden select-none">
                <h4 class="text-xs font-black tracking-wider text-brandOrange uppercase mb-3">기술 직관 비유: 도로망(인터넷)과 택배망(웹)</h4>
                <div class="bg-slate-950/80 rounded-2xl p-2 border border-white/5 flex items-center justify-center h-32 overflow-hidden">
                  <svg class="w-full h-full" viewBox="0 0 500 120" xmlns="http://www.w3.org/2000/svg">
                    <!-- Road Background -->
                    <rect y="45" width="500" height="40" fill="#1e1e24" />
                    <!-- Road Center Lines -->
                    <line x1="0" y1="65" x2="500" y2="65" stroke="#F5D130" stroke-width="2" stroke-dasharray="15,15" />
                    
                    <!-- Sign Post (URL Destination) -->
                    <g transform="translate(420, 10)">
                      <rect width="70" height="30" rx="4" fill="#111" stroke="#FF6B35" stroke-width="1.5" />
                      <text x="35" y="15" fill="#FF6B35" font-size="7" font-family="'Inter'" text-anchor="middle" font-weight="bold">URL 주소</text>
                      <text x="35" y="24" fill="#888" font-size="6" font-family="'Inter'" text-anchor="middle">http://mokpolab...</text>
                      <line x1="35" y1="30" x2="35" y2="45" stroke="#FF6B35" stroke-width="1.5" />
                    </g>
                    
                    <!-- Internet Infrastructure (Under the road) -->
                    <text x="20" y="105" fill="#555" font-size="8" font-family="'Inter'" font-weight="bold">PHYSICAL LAYER (망 인프라: 광케이블, 라우터, IP)</text>
                    
                    <!-- Delivery Truck (Web / HTTP Service) -->
                    <g transform="translate(150, 48)" class="cursor-pointer group">
                      <!-- Truck Body Back (HTML / Packet Cargo) -->
                      <rect x="0" y="2" width="60" height="24" rx="4" fill="#FF6B35" />
                      <text x="30" y="16" fill="#FFF" font-size="8" font-family="'Pretendard'" text-anchor="middle" font-weight="bold">HTML 문서</text>
                      
                      <!-- Truck Cabin Front -->
                      <path d="M 60 8 L 75 8 L 82 18 L 82 26 L 60 26 Z" fill="#10B981" />
                      <!-- Truck Window -->
                      <rect x="63" y="10" width="10" height="7" fill="#111" />
                      
                      <!-- Wheels -->
                      <circle cx="15" cy="28" r="6" fill="#111" stroke="#333" stroke-width="1.5" />
                      <circle cx="50" cy="28" r="6" fill="#111" stroke="#333" stroke-width="1.5" />
                      <circle cx="15" cy="28" r="2.5" fill="#FFF" />
                      <circle cx="50" cy="28" r="2.5" fill="#FFF" />
                      
                      <!-- Smoke particles -->
                      <circle cx="-5" cy="20" r="3" fill="rgba(255,255,255,0.05)" class="animate-pulse" />
                      <circle cx="-12" cy="18" r="2" fill="rgba(255,255,255,0.03)" />
                      
                      <text x="40" y="-4" fill="#10B981" font-size="8" font-family="'Inter'" text-anchor="middle" font-weight="bold">HTTP 트럭</text>
                    </g>
                    
                    <!-- Label -->
                    <text x="20" y="25" fill="#FFF" font-size="10" font-family="'Pretendard'" font-weight="bold">도로망 = 인터넷 (망 인프라)</text>
                    <text x="20" y="38" fill="#10B981" font-size="9" font-family="'Pretendard'" font-weight="bold">택배 서비스 = 웹 (HTTP/HTML 규격)</text>
                  </svg>
                </div>
              </div>

              <!-- Comparative Matrix Table -->
              <div class="bg-slate-900 border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
                <div class="p-4 bg-white/5 border-b border-white/5 flex justify-between items-center">
                  <h4 class="text-xs font-extrabold text-white uppercase tracking-wider">도로망(인터넷)과 택배망(웹) 상세 대조표</h4>
                  <span class="text-[9px] font-mono text-slate-500">LEGEND COMPARISON</span>
                </div>
                <div class="p-3">
                  <table class="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr class="border-b border-white/10 text-slate-400 font-bold text-[11px] uppercase">
                        <th class="p-2.5">구분 항목</th>
                        <th class="p-2.5">인터넷 (Internet)</th>
                        <th class="p-2.5">웹 (Web)</th>
                      </tr>
                    </thead>
                    <tbody class="text-slate-350 divide-y divide-white/5 font-medium">
                      <tr class="hover:bg-white/5 transition-colors">
                        <td class="p-2.5 font-bold text-brandOrange">비유적 개념</td>
                        <td class="p-2.5 text-slate-300">아스팔트 도로망 및 신호등 체계</td>
                        <td class="p-2.5 text-slate-300">도로망 위를 달리는 표준 규격 택배 서비스</td>
                      </tr>
                      <tr class="hover:bg-white/5 transition-colors">
                        <td class="p-2.5 font-bold text-brandOrange">물리 계층</td>
                        <td class="p-2.5 text-slate-300">광케이블, 인터넷 공유기, IP 프로토콜</td>
                        <td class="p-2.5 text-slate-300">웹 브라우저, 웹 서버, HTTP 소프트웨어</td>
                      </tr>
                      <tr class="hover:bg-white/5 transition-colors">
                        <td class="p-2.5 font-bold text-brandOrange">식별자</td>
                        <td class="p-2.5 text-slate-300">컴퓨터 고유 주소 IP (예: 172.217.161.14)</td>
                        <td class="p-2.5 text-slate-300">도메인 및 경로 지정자 URL (예: http://...)</td>
                      </tr>
                      <tr class="hover:bg-white/5 transition-colors">
                        <td class="p-2.5 font-bold text-brandOrange">포함 관계</td>
                        <td class="p-2.5 text-slate-300">하위 시스템 (인프라 기반 레이어)</td>
                        <td class="p-2.5 text-slate-300">상위 시스템 (인터넷 위에서 작동하는 응용)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
        </div>`
  },
  {
    id: "web-birth",
    classes: "p-8 md:p-12 xl:p-16 flex flex-col justify-center overflow-y-auto",
    contentHtml: `<div class="max-w-[1360px] w-full mx-auto space-y-4">
          <span class="text-xs font-outfit uppercase tracking-[0.25em] text-brandOrange block">04 / LIVE SIMULATION</span>
          <h2 class="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white font-display tracking-tight leading-none">
            [실습] 첫 HTTP 요청 보내기
          </h2>
          <div class="w-20 h-[3px] bg-brandOrange/70"></div>
          
          <div class="grid grid-cols-1 xl:grid-cols-12 gap-8 items-stretch">
            
            <!-- Left Info -->
            <div class="xl:col-span-6 text-sm md:text-base text-slate-200 space-y-4 leading-[1.8] font-body font-light flex flex-col justify-center">
              <p>
                웹 브라우저가 주소창에 주소를 적고 엔터를 칠 때, 보이지 않는 곳에서 발생하는 실제 HTTP 패킷 거래 프로세스입니다.
              </p>
              <p>
                우측 시뮬레이터 창에 주소를 기입하고 **[요청 전송]** 버튼을 누르시면 브라우저(클라이언트)가 도메인을 IP로 쪼개어 서버 컴퓨터를 찾고, TCP 연결을 맺어 정적인 HTML 파일을 확보해 오는 단계가 시각화됩니다.
              </p>
              
              <div class="ledger-grid text-slate-200 mt-2 rounded-xl overflow-hidden shadow-2xl text-[11px] md:text-xs">
                <div class="ledger-cell p-3.5 space-y-1 bg-slate-900/40">
                  <strong class="text-brandOrange block font-bold">1단계: DNS Lookup</strong>
                  <span class="text-slate-400 block">사람이 읽는 문자 도메인을 컴퓨터용 물리 주소 IP로 번역합니다.</span>
                </div>
                <div class="ledger-cell p-3.5 space-y-1 bg-slate-900/40">
                  <strong class="text-brandOrange block font-bold">2단계: Handshake & TCP Request</strong>
                  <span class="text-slate-400 block">수신 측 서버와 패킷 손실 없는 튼튼한 통로를 뚫고 HTTP 요청을 보냅니다.</span>
                </div>
                <div class="ledger-cell p-3.5 space-y-1 bg-slate-900/40">
                  <strong class="text-brandOrange block font-bold">3단계: Server Response Code (200 OK)</strong>
                  <span class="text-slate-400 block">응답 바디에 실린 정적 마크업 HTML 원본 텍스트를 돌려받습니다.</span>
                </div>
              </div>
            </div>

            <!-- Simulator Panel -->
            <div class="xl:col-span-6 p-6 bg-cardBg border border-white/5 rounded-3xl space-y-4 shadow-xl flex flex-col justify-between">
              <div class="text-xs text-slate-500 font-mono flex items-center justify-between">
                <span>SIMULATOR: LIVE HTTP REQUESTER</span>
                <span class="w-2.5 h-2.5 rounded-full bg-brandGreen animate-pulse"></span>
              </div>
              <div class="flex gap-2">
                <input type="text" id="sim-url" value="http://mokpolab.ai/docs" class="flex-1 bg-slate-950 border border-white/10 rounded-lg px-3 py-2 text-xs text-slate-200 font-mono focus:outline-none focus:border-brandOrange" />
                <button onclick="runHttpSimulator()" class="bg-brandOrange hover:bg-brandOrangeLight text-white px-4 py-2 rounded-lg text-xs font-bold transition-all active:scale-95 cursor-pointer shrink-0">요청 전송</button>
                <button onclick="resetHttpSimulator()" class="bg-slate-900 border border-white/10 hover:border-brandOrange text-brandOrange px-3 py-2 rounded-lg text-xs font-bold transition-all active:scale-95 cursor-pointer shrink-0">초기화</button>
              </div>
 
              <!-- Animated Road Graphic -->
              <div class="relative h-20 bg-slate-950 border border-white/5 rounded-xl overflow-hidden flex items-center justify-between px-8">
                <div class="flex flex-col items-center">
                  <i data-lucide="monitor" class="w-5 h-5 text-brandOrange"></i>
                  <span class="text-[9px] font-mono text-slate-500 mt-1">Browser</span>
                </div>
                <div class="flex-1 relative h-[2px] bg-white/5 mx-4">
                  <div id="sim-packet" class="absolute top-[-4px] left-0 w-2.5 h-2.5 bg-brandOrange rounded-full opacity-0 shadow-[0_0_8px_#FF6B35]"></div>
                </div>
                <div class="flex flex-col items-center">
                  <i data-lucide="server" class="w-5 h-5 text-brandGreen"></i>
                  <span class="text-[9px] font-mono text-slate-500 mt-1">Server</span>
                </div>
              </div>
 
              <!-- Live Render Frame -->
              <div class="bg-slate-950 rounded-xl p-4 h-32 overflow-y-auto border border-white/5 font-mono text-[11px] leading-relaxed">
                <div class="text-slate-500 border-b border-white/5 pb-1.5 mb-1.5 flex justify-between">
                  <span>RENDER ENGINE VIEWPORT</span>
                  <span id="sim-status" class="font-extrabold text-slate-400">WAITING...</span>
                </div>
                <pre id="sim-response-output" class="text-slate-400 whitespace-pre-wrap">주소를 기입하고 [요청 전송] 버튼을 눌러보세요.</pre>
              </div>
            </div>

          </div>
        </div>`
  },
  {
    id: "html-structure",
    classes: "p-8 md:p-12 xl:p-16 flex flex-col justify-center overflow-y-auto",
    contentHtml: `<div class="max-w-[1360px] w-full mx-auto space-y-6">
          <span class="text-xs font-outfit uppercase tracking-[0.25em] text-brandOrange block">05 / DOCUMENT STRUCTURE</span>
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            <!-- Left Info -->
            <div class="lg:col-span-6 space-y-5 flex flex-col justify-center">
              <h2 class="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white font-display tracking-tight leading-none">
                HTML: 정보의 뼈대 세우기
              </h2>
              <div class="w-20 h-[3px] bg-brandOrange/70"></div>
              <div class="text-sm md:text-base xl:text-[17px] text-slate-200 space-y-4 leading-[1.8] font-body font-light">
                <p>
                  <span class="concept-badge">HTML</span>은 프로그래밍 로직을 다루는 프로그래밍 언어가 아닙니다. 이것은 문서 내 정보의 <strong>위계(Hierarchy)와 의미론적 구조(Semantics)</strong>를 규칙에 따라 표시하기 위한 단순 규약 서식입니다.
                </p>
                <p>
                  디자인이나 화면 스타일은 완전히 생략한 채, 오직 정보 간의 의미적 무게에 집중하는 것이 올바른 HTML 작성법입니다. AI 비서에게 마크업 코딩을 위임할 때도, 명확한 세만틱(Semantic) 태그 구조를 전달해 주어야 군더더기 없는 완벽한 코드가 생성됩니다.
                </p>
              </div>
              <div class="p-4 bg-orange-950/20 border-l-4 border-brandOrange rounded-r-xl text-orange-200 text-xs md:text-sm font-semibold">
                💡 <strong>핵심 규칙:</strong> 제목은 &lt;h1&gt;, 본문 단락은 &lt;p&gt;, 구조적 구획은 &lt;section&gt; 또는 &lt;article&gt;을 써서 브라우저와 AI 검색 로봇에게 정보의 성격을 정확하게 브리핑해 줍니다.
              </div>
            </div>

            <!-- Right Code & Schema Callout -->
            <div class="lg:col-span-6 p-6 concept-card rounded-3xl space-y-4 shadow-2xl flex flex-col justify-center">
              <h4 class="text-xs font-black tracking-wider text-brandOrange uppercase">의미론적(Semantic) HTML 골격 예시</h4>
              <div class="p-4 bg-slate-950 border border-panelBorder rounded-xl font-mono text-[11px] md:text-xs text-orange-200/90 leading-relaxed overflow-x-auto">
                <span class="text-slate-500">&lt;!-- 문서 전체의 머리글 구역 --&gt;</span><br/>
                &lt;<span class="text-brandOrange font-bold">header</span>&gt;<br/>
                &nbsp;&nbsp;&lt;<span class="text-brandGreen">h1</span>&gt;MOKPO AI LAB 스터디 교안&lt;/<span class="text-brandGreen">h1</span>&gt;<br/>
                &lt;/<span class="text-brandOrange font-bold">header</span>&gt;<br/><br/>
                <span class="text-slate-500">&lt;!-- 독립적으로 의미 있는 발행 콘텐츠 구역 --&gt;</span><br/>
                &lt;<span class="text-brandOrange font-bold">article</span>&gt;<br/>
                &nbsp;&nbsp;&lt;<span class="text-brandGreen">h2</span>&gt;HTML의 본질&lt;/<span class="text-brandGreen">h2</span>&gt;<br/>
                &nbsp;&nbsp;&lt;<span class="text-brandGreen">p</span>&gt;디자인을 배제하고 정보 구조의 무결성에 집중합니다.&lt;/<span class="text-brandGreen">p</span>&gt;<br/>
                &lt;/<span class="text-brandOrange font-bold">article</span>&gt;
              </div>
              <div class="p-4 bg-white/5 rounded-xl text-slate-350 text-[11px] md:text-xs leading-relaxed space-y-1">
                <strong class="text-slate-200 block">📌 대표적인 세만틱 태그 종류</strong>
                <ul class="list-disc pl-4 space-y-0.5">
                  <li><span class="text-brandOrange font-bold">&lt;header&gt;</span>: 소개 정보나 탐색 링크들의 집합</li>
                  <li><span class="text-brandOrange font-bold">&lt;nav&gt;</span>: 다른 페이지로 이동하는 주 메뉴 네비게이션</li>
                  <li><span class="text-brandOrange font-bold">&lt;main&gt;</span>: 웹페이지 내부의 지배적이고 독립적인 본문 구역</li>
                </ul>
              </div>
            </div>

          </div>
        </div>`
  },
  {
    id: "css-independence",
    classes: "p-8 md:p-12 xl:p-16 flex flex-col justify-center overflow-y-auto",
    contentHtml: `<div class="max-w-[1360px] w-full mx-auto space-y-6">
          <span class="text-xs font-outfit uppercase tracking-[0.25em] text-brandOrange block">06 / PRESENTATION LAYER</span>
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            <!-- Left Info -->
            <div class="lg:col-span-7 space-y-5 flex flex-col justify-center">
              <h2 class="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white font-display tracking-tight leading-none">
                CSS: 디자인의 독립 선언
              </h2>
              <div class="w-20 h-[3px] bg-brandOrange/70"></div>
              <div class="text-sm md:text-base xl:text-[17px] text-slate-200 space-y-4 leading-[1.8] font-body font-light">
                <p>
                  초기 웹 표준(HTML 2.0/3.2) 시절에는 화면 레이아웃과 색상, 폰트를 지정하는 전용 언어가 없었습니다. 그 결과 개발자들은 마크업 코드 내부에 폰트 색상을 지정하는 &lt;font color="red"&gt;나 정렬을 맞추는 align="center" 같은 꾸미기 속성들을 욱여넣었습니다.
                </p>
                <p>
                  이로 인해 문서의 용량은 수십 배 무거워졌고, 사이트 전체의 메인 테마 색상을 변경하려면 수천 개의 HTML 파일을 일일이 열어 노가다로 수정해야 하는 재앙이 찾아왔습니다.
                </p>
                <p>
                  이에 대항하여 1996년, 마크업 정보 구조에서 시각 디자인 표현 규칙을 물리적 파일 단위로 완전히 떼어낸 <span class="concept-badge">CSS</span> 표준이 제정되었습니다. "구조와 스타일의 물리적 관심사 분리(Separation of Concerns)"가 완성된 것입니다.
                </p>
              </div>
            </div>

            <!-- Right Concept Callout (Aesthetic, non-squishing layout) -->
            <div class="lg:col-span-5 p-6 concept-card rounded-3xl space-y-4 shadow-2xl flex flex-col justify-center noise-bg">
              <h4 class="text-xs font-black tracking-wider text-brandOrange uppercase">CSS 규칙 우선순위 & 구조</h4>
              <div class="p-4 bg-slate-950 border border-white/5 rounded-xl space-y-3">
                <strong class="text-xs text-slate-400 block uppercase">Cascading (폭포식 규칙 적용) 우선순위</strong>
                <div class="space-y-2 text-[11px] md:text-xs">
                  <div class="flex items-center justify-between border-b border-white/5 pb-1.5 gap-4">
                    <span class="text-brandOrange font-bold shrink-0">1. !important</span>
                    <span class="text-slate-400 text-right max-w-[70%] leading-tight break-keep">모든 규칙을 압도하고 적용되는 절대 속성</span>
                  </div>
                  <div class="flex items-center justify-between border-b border-white/5 pb-1.5 gap-4">
                    <span class="text-brandGreen font-bold shrink-0">2. 인라인 스타일</span>
                    <span class="text-slate-400 text-right max-w-[70%] leading-tight break-keep">태그에 직접 박는 속성 (style="...")</span>
                  </div>
                  <div class="flex items-center justify-between border-b border-white/5 pb-1.5 gap-4">
                    <span class="text-blue-400 font-bold shrink-0">3. ID 선택자</span>
                    <span class="text-slate-400 text-right max-w-[70%] leading-tight break-keep">특정 ID를 타겟 (#content)</span>
                  </div>
                  <div class="flex items-center justify-between border-b border-white/5 pb-1.5 gap-4">
                    <span class="text-purple-400 font-bold shrink-0">4. 클래스/속성</span>
                    <span class="text-slate-400 text-right max-w-[70%] leading-tight break-keep">재사용 클래스 타겟 (.card, [type])</span>
                  </div>
                  <div class="flex items-center justify-between pb-1.5 gap-4">
                    <span class="text-slate-400 font-bold shrink-0">5. 태그 선택자</span>
                    <span class="text-slate-400 text-right max-w-[70%] leading-tight break-keep">HTML 태그 전체 타겟 (div, p)</span>
                  </div>
                </div>
              </div>
              <div class="p-4.5 bg-white/5 rounded-xl text-slate-350 text-[11px] md:text-xs leading-relaxed">
                💡 <strong>오디세이의 꿀팁:</strong> CSS 독립 덕분에 우리는 HTML 뼈대는 절대 바꾸지 않고, CSS 파일 한 장만 테마별로 스왑(Swap)하여 다크 모드, 네온 브랜드 모드 등을 무한대로 생성할 수 있게 되었습니다.
              </div>
            </div>

          </div>
        </div>`
  },
  {
    id: "css-era",
    classes: "p-8 md:p-12 xl:p-16 flex flex-col justify-center overflow-y-auto",
    contentHtml: `<div class="max-w-[1360px] w-full mx-auto space-y-4">
          <span class="text-xs font-outfit uppercase tracking-[0.25em] text-brandOrange block">07 / LIVE SIMULATION</span>
          <h2 class="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white font-display tracking-tight leading-none">
            [실습] 첫 CSS 박스 다듬기
          </h2>
          <div class="w-20 h-[3px] bg-brandOrange/70"></div>
          
          <div class="grid grid-cols-1 xl:grid-cols-12 gap-8 items-stretch">
            
            <!-- Left Info -->
            <div class="xl:col-span-6 text-sm md:text-base text-slate-200 space-y-4 leading-[1.8] font-body font-light flex flex-col justify-center">
              <p>
                웹 화면을 구성하는 모든 시각적 요소는 본질적으로 사각형의 상자, 즉 **박스 모델 (Box-Model)** 단위로 설계되고 관리됩니다.
              </p>
              <p>
                우측 컨트롤러 판넬의 슬라이더를 당기며 사각 박스 주위의 패딩과 둥글기, 그리고 네온 반경을 실시간으로 컨트롤해 보세요. 
              </p>
              <div class="p-4 bg-slate-900/60 border border-white/5 rounded-2xl text-[11px] md:text-xs text-slate-350 space-y-2">
                <strong class="text-slate-250 block">📦 CSS 박스 모델 핵심 구성</strong>
                <ul class="list-disc pl-4 space-y-1">
                  <li><strong class="text-brandOrange">Content</strong>: 글자나 이미지가 출력되는 실제 데이터 구역</li>
                  <li><strong class="text-brandOrange">Padding</strong>: 콘텐츠 구역과 보더(Border) 경계선 사이의 내부 여백</li>
                  <li><strong class="text-brandOrange">Border</strong>: 사각형 박스를 감싸는 테두리 경계선</li>
                  <li><strong class="text-brandOrange">Margin</strong>: 옆에 인접한 다른 박스나 부모 프레임과의 외부 공백 여백</li>
                </ul>
              </div>
            </div>

            <!-- CSS Playground Panel -->
            <div class="xl:col-span-6 p-6 bg-cardBg border border-white/5 rounded-3xl space-y-4 shadow-xl flex flex-col justify-between">
              <div class="text-xs text-slate-500 font-mono flex items-center justify-between">
                <span>SIMULATOR: LIVE CSS STYLER</span>
                <span class="text-brandOrange font-bold font-mono">box-model</span>
              </div>
              
              <!-- Sliders -->
              <div class="space-y-3.5 text-xs font-body font-semibold">
                <div>
                  <div class="flex justify-between text-slate-400 mb-1">
                    <span>Padding (내부 여백)</span>
                    <span id="label-pad" class="text-brandOrange font-bold">24px</span>
                  </div>
                  <input type="range" id="slider-pad" min="8" max="48" value="24" oninput="runCssPlayground()" class="w-full accent-brandOrange bg-slate-950 h-1 rounded" />
                </div>
                <div>
                  <div class="flex justify-between text-slate-400 mb-1">
                    <span>Border Radius (모서리 곡률)</span>
                    <span id="label-radius" class="text-brandOrange font-bold">12px</span>
                  </div>
                  <input type="range" id="slider-radius" min="0" max="32" value="12" oninput="runCssPlayground()" class="w-full accent-brandOrange bg-slate-950 h-1 rounded" />
                </div>
                <div>
                  <div class="flex justify-between text-slate-400 mb-1">
                    <span>Accent Glow (네온 글로우 반경)</span>
                    <span id="label-glow" class="text-brandOrange font-bold">12px</span>
                  </div>
                  <input type="range" id="slider-glow" min="0" max="30" value="12" oninput="runCssPlayground()" class="w-full accent-brandOrange bg-slate-950 h-1 rounded" />
                </div>
              </div>
 
              <!-- Live styled block -->
              <div class="flex justify-center py-4 bg-slate-950 rounded-xl border border-white/5 relative overflow-hidden">
                <div id="sim-box" class="bg-cardBg border border-brandOrange text-center font-display text-xs font-bold text-white transition-all duration-75 flex flex-col justify-center items-center shadow-[0_0_12px_rgba(255,107,53,0.3)]" style="padding: 24px; border-radius: 12px;">
                  Mokpo AI Lab Box
                </div>
              </div>
 
              <!-- Dynamic Code Block -->
              <div class="bg-slate-950 rounded-xl p-3 border border-white/5 font-mono text-[10.5px] text-orange-200/90 leading-normal">
                <span class="text-slate-500">/* Dynamic Generated CSS style rules */</span><br/>
                <span class="text-brandOrange">.styled-box</span> {<br/>
                &nbsp;&nbsp;<span class="text-slate-300">background-color:</span> #111111;<br/>
                &nbsp;&nbsp;<span class="text-slate-300">border:</span> 2px solid #FF6B35;<br/>
                &nbsp;&nbsp;<span class="text-slate-300">padding:</span> <span id="code-pad" class="text-yellow-450">24px</span>;<br/>
                &nbsp;&nbsp;<span class="text-slate-300">border-radius:</span> <span id="code-radius" class="text-yellow-450">12px</span>;<br/>
                &nbsp;&nbsp;<span class="text-slate-300">box-shadow:</span> 0 0 <span id="code-glow" class="text-yellow-450">12px</span> rgba(255,107,53,0.3);<br/>
                }
              </div>
            </div>
          </div>
        </div>`
  },
  {
    id: "js-intro",
    classes: "p-8 md:p-12 xl:p-16 flex flex-col justify-center overflow-y-auto",
    contentHtml: `<div class="max-w-[1360px] w-full mx-auto space-y-6">
          <span class="text-xs font-outfit uppercase tracking-[0.25em] text-brandOrange block">08 / DYNAMIC INTERACTION</span>
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            <!-- Left Info -->
            <div class="lg:col-span-7 space-y-5 flex flex-col justify-center">
              <h2 class="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white font-display tracking-tight leading-none">
                JS: 웹에 영혼 불어넣기
              </h2>
              <div class="w-20 h-[3px] bg-brandOrange/70"></div>
              <div class="text-sm md:text-base xl:text-[17px] text-slate-200 space-y-4 leading-[1.8] font-body font-light">
                <p>
                  HTML과 CSS로 웹페이지는 이쁘게 뼈대를 세우고 스타일 화장을 마쳤지만, 여전히 책처럼 정적인 상태에 머물러 있었습니다. 사용자의 행위에 실시간으로 대응하는 동적 인터랙션이 불가능했던 것입니다.
                </p>
                <p>
                  이때 1995년 넷스케이프의 브렌던 아이크(Brendan Eich)에 의해 단 10일 만에 탄생한 언어가 바로 <span class="concept-badge">JavaScript</span>입니다. 
                </p>
                <p>
                  자바스크립트는 브라우저 내부 메모리에 로드된 문서 객체 모델(DOM) 트리 구조를 런타임에 직접 조작하여, 새로고침 없이 화면 일부만 비동기(Ajax)로 변경하거나 애니메이션을 동작시키는 웹 애플리케이션의 핵심 중추 엔진이 되었습니다.
                </p>
              </div>
            </div>

            <!-- Right Visual Event Loop Card -->
            <div class="lg:col-span-5 p-6 concept-card rounded-3xl space-y-4 shadow-2xl flex flex-col justify-center noise-bg">
              <h4 class="text-xs font-black tracking-wider text-brandOrange uppercase">자바스크립트 실행 환경 (Runtime)</h4>
              <div class="space-y-3 text-xs">
                <div class="p-4 bg-slate-950 border border-white/5 rounded-xl">
                  <span class="text-brandOrange font-bold block mb-1">1. 싱글 스레드 (Single-Threaded)</span>
                  <span class="text-slate-400 block leading-relaxed">한 번에 하나의 작업(Call Stack)만 동기적으로 처리하는 구조로, 연산 설계가 단순함</span>
                </div>
                <div class="p-4 bg-slate-950 border border-white/5 rounded-xl">
                  <span class="text-brandGreen font-bold block mb-1">2. 이벤트 루프 (Event Loop)</span>
                  <span class="text-slate-400 block leading-relaxed">비동기 작업(타이머, 네트워크 요청 등)이 백그라운드(Web APIs)에서 끝나면 큐(Task Queue)를 거쳐 메인 스레드로 넘겨주는 교통정리자</span>
                </div>
              </div>
            </div>

          </div>
        </div>`
  },
  {
    id: "js-era",
    classes: "p-8 md:p-12 xl:p-16 flex flex-col justify-center overflow-y-auto",
    contentHtml: `<div class="max-w-[1360px] w-full mx-auto space-y-4">
          <span class="text-xs font-outfit uppercase tracking-[0.25em] text-brandOrange block">09 / LIVE SIMULATION</span>
          <h2 class="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white font-display tracking-tight leading-none">
            [실습] 동적 DOM 조작해보기
          </h2>
          <div class="w-20 h-[3px] bg-brandOrange/70"></div>
          
          <div class="grid grid-cols-1 xl:grid-cols-12 gap-8 items-stretch">
            
            <!-- Left Info -->
            <div class="xl:col-span-6 text-sm md:text-base text-slate-200 space-y-4 leading-[1.8] font-body font-light flex flex-col justify-center">
              <p>
                자바스크립트 엔진이 웹 브라우저 메모리에 적재되어 있는 HTML의 실시간 트리 객체 모델(DOM)을 직접 뜯어고치는 과정입니다.
              </p>
              <p>
                우측의 <strong>[새 노드 추가]</strong> 단추를 클릭해 보세요. 자바스크립트 구문 명령이 실행되어 메모리 상의 \`#root\` 노드 하위에 동적으로 자식 요소를 생성해 붙이는 물리적 단계를 시뮬레이션합니다.
              </p>
              <div class="p-4 bg-slate-900/60 border border-white/5 rounded-2xl text-[11px] md:text-xs text-slate-350 space-y-2">
                <strong class="text-slate-250 block">📌 DOM 조작에 쓰인 실제 JS 명령어</strong>
                <ul class="list-disc pl-4 space-y-1 font-mono text-[10.5px] text-orange-200/80">
                  <li>document.createElement('div')</li>
                  <li>node.appendChild(childNode)</li>
                  <li>container.innerHTML = ""</li>
                </ul>
              </div>
            </div>

            <!-- DOM simulator console -->
            <div class="xl:col-span-6 p-6 bg-cardBg border border-white/5 rounded-3xl space-y-4 shadow-xl flex flex-col justify-between">
              <div class="text-xs text-slate-500 font-mono flex items-center justify-between">
                <span>SIMULATOR: LIVE DOM MANIPULATOR</span>
                <span class="text-brandOrange font-bold font-mono">console</span>
              </div>
 
              <!-- Playground action buttons -->
              <div class="flex gap-2">
                <button onclick="domSimAdd()" class="bg-brandOrange hover:bg-brandOrangeLight text-white px-3 py-2 rounded-lg text-xs font-bold transition-all active:scale-95 cursor-pointer flex-1">새 노드 추가 (Append)</button>
                <button onclick="domSimClear()" class="bg-slate-900 border border-white/10 hover:border-brandOrange text-brandOrange px-3 py-2 rounded-lg text-xs font-bold transition-all active:scale-95 cursor-pointer">비우기</button>
              </div>
 
              <!-- Interactive Node visual canvas -->
              <div class="bg-slate-950 rounded-xl p-4 min-h-[96px] border border-white/5 flex flex-wrap gap-2 items-center justify-center" id="dom-sim-sandbox">
                <div class="px-3 py-1.5 bg-brandOrange/10 border border-brandOrange text-brandOrange rounded text-xs font-bold">#root</div>
              </div>
 
              <!-- Live JS Console log -->
              <div class="bg-slate-950 rounded-xl p-3 border border-white/5 font-mono text-[10.5px] h-24 overflow-y-auto" id="dom-sim-console">
                <div class="text-slate-500 font-bold">&gt;_ JS Console log ready...</div>
              </div>
            </div>

          </div>
        </div>`
  },
  {
    id: "browser-parsing",
    classes: "p-8 md:p-12 xl:p-16 flex flex-col justify-center overflow-y-auto",
    contentHtml: `<div class="max-w-[1360px] w-full mx-auto space-y-6">
          <span class="text-xs font-outfit uppercase tracking-[0.25em] text-brandOrange block">10 / RENDERING PIPELINE</span>
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            <!-- Left Info -->
            <div class="lg:col-span-6 space-y-5 flex flex-col justify-center">
              <h2 class="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white font-display tracking-tight leading-none">
                브라우저 동작: 파싱과 트리
              </h2>
              <div class="w-20 h-[3px] bg-brandOrange/70"></div>
              <div class="text-sm md:text-base xl:text-[17px] text-slate-200 space-y-4 leading-[1.8] font-body font-light">
                <p>
                  서버에서 HTML 텍스트 원본이 넘어오면, 브라우저의 렌더링 엔진은 1초도 안 되는 찰나의 순간에 복잡한 변환 연산을 마칩니다.
                </p>
                <p>
                  이 과정에서 <span class="concept-badge">DOM</span>과 <span class="concept-badge">CSSOM</span>이 각자 독립적으로 형성되며, 화면에 직접 노출될 실제 태그들만 결합하여 최종 <span class="concept-badge">Render Tree</span>를 구축하게 됩니다.
                </p>
              </div>
              <div class="p-4 bg-white/5 border border-white/5 rounded-2xl text-[11px] md:text-xs text-slate-355 leading-relaxed">
                💡 <strong>기억할 것:</strong> HTML 중간에 &lt;script&gt; 태그를 만나면 브라우저는 마크업 파싱을 즉시 멈추고 자바스크립트 파일을 실행(DOM 파싱 차단)합니다. 이를 방지하기 위해 defer 또는 async 속성이 고안되었습니다.
              </div>
            </div>

            <!-- Right Concept Callout (DOM Tree SVG Illustration + Pipeline Steps) -->
            <div class="lg:col-span-6 p-6 concept-card rounded-3xl space-y-4 shadow-2xl flex flex-col justify-between noise-bg">
              <div class="space-y-3">
                <h4 class="text-xs font-black tracking-wider text-brandOrange uppercase">HTML 코드의 DOM 트리 변환 (Object Model)</h4>
                
                <!-- SVG DOM Tree Diagram -->
                <div class="bg-slate-950/80 rounded-2xl p-4 border border-white/5 relative overflow-hidden flex items-center justify-center h-48 select-none">
                  <svg class="w-full h-full" viewBox="0 0 450 180" xmlns="http://www.w3.org/2000/svg">
                    <!-- Tree Lines -->
                    <path d="M 225 35 L 225 65" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" />
                    <path d="M 225 65 L 100 105" stroke="rgba(255, 107, 53, 0.4)" stroke-width="1.5" />
                    <path d="M 225 65 L 350 105" stroke="rgba(16, 185, 129, 0.4)" stroke-width="1.5" />
                    <path d="M 100 105 L 50 145" stroke="rgba(255,255,255,0.15)" stroke-width="1.2" />
                    <path d="M 100 105 L 150 145" stroke="rgba(255,255,255,0.15)" stroke-width="1.2" />
                    
                    <!-- Document (Root) -->
                    <g transform="translate(185, 15)">
                      <rect width="80" height="24" rx="4" fill="#111" stroke="#FF6B35" stroke-width="1.5" />
                      <text x="40" y="15" fill="#FFF" font-size="9" font-family="'Inter'" font-weight="bold" text-anchor="middle">document</text>
                    </g>
                    
                    <!-- html Node -->
                    <g transform="translate(185, 55)">
                      <rect width="80" height="24" rx="4" fill="#111" stroke="rgba(255,255,255,0.2)" stroke-width="1.2" />
                      <text x="40" y="15" fill="#888" font-size="9" font-family="'Inter'" text-anchor="middle">&lt;html&gt;</text>
                    </g>
                    
                    <!-- head Node -->
                    <g transform="translate(60, 95)">
                      <rect width="80" height="24" rx="4" fill="#111" stroke="rgba(255,255,255,0.2)" stroke-width="1.2" />
                      <text x="40" y="15" fill="#888" font-size="9" font-family="'Inter'" text-anchor="middle">&lt;head&gt;</text>
                    </g>
                    
                    <!-- body Node -->
                    <g transform="translate(310, 95)">
                      <rect width="80" height="24" rx="4" fill="#111" stroke="#10B981" stroke-width="1.5" />
                      <text x="40" y="15" fill="#10B981" font-size="9" font-family="'Inter'" font-weight="bold" text-anchor="middle">&lt;body&gt;</text>
                      <circle cx="80" cy="12" r="3.5" fill="#10B981" class="animate-pulse" />
                    </g>
                    
                    <!-- meta Node -->
                    <g transform="translate(10, 135)">
                      <rect width="80" height="20" rx="4" fill="#15151a" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
                      <text x="40" y="13" fill="#666" font-size="8" font-family="'Inter'" text-anchor="middle">&lt;meta&gt;</text>
                    </g>
                    
                    <!-- title Node -->
                    <g transform="translate(110, 135)">
                      <rect width="80" height="20" rx="4" fill="#15151a" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
                      <text x="40" y="13" fill="#666" font-size="8" font-family="'Inter'" text-anchor="middle">&lt;title&gt;</text>
                    </g>
                  </svg>
                </div>
              </div>

              <!-- Rendering steps -->
              <div class="grid grid-cols-3 gap-2 text-xs">
                <div class="p-3 bg-slate-950 border border-white/5 rounded-2xl hover:border-brandOrange/30 transition-colors">
                  <span class="text-brandOrange font-bold block mb-0.5 text-[11px]">1. DOM 빌드</span>
                  <span class="text-[9px] text-slate-500 block leading-tight">HTML 코드를 파싱해 구조 트리화</span>
                </div>
                <div class="p-3 bg-slate-950 border border-white/5 rounded-2xl hover:border-brandOrange/30 transition-colors">
                  <span class="text-brandOrange font-bold block mb-0.5 text-[11px]">2. CSSOM 빌드</span>
                  <span class="text-[9px] text-slate-500 block leading-tight">스타일 시트를 파싱해 규칙 매핑</span>
                </div>
                <div class="p-3 bg-slate-950 border border-white/5 rounded-2xl hover:border-brandOrange/30 transition-colors">
                  <span class="text-brandGreen font-bold block mb-0.5 text-[11px]">3. 렌더트리</span>
                  <span class="text-[9px] text-slate-500 block leading-tight">실제 픽셀로 그릴 최종 노드 결합</span>
                </div>
              </div>
            </div>

          </div>
        </div>`
  },
  {
    id: "reflow-repaint-theory",
    classes: "p-8 md:p-12 xl:p-16 flex flex-col justify-center overflow-y-auto",
    contentHtml: `<div class="max-w-[1360px] w-full mx-auto space-y-6">
          <span class="text-xs font-outfit uppercase tracking-[0.25em] text-brandOrange block">11 / PERFORMANCE COST</span>
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            <!-- Left Info -->
            <div class="lg:col-span-6 space-y-5 flex flex-col justify-center">
              <h2 class="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white font-display tracking-tight leading-none">
                브라우저 성능: 리플로우/페인트
              </h2>
              <div class="w-20 h-[3px] bg-brandOrange/70"></div>
              <div class="text-sm md:text-base xl:text-[17px] text-slate-200 space-y-4 leading-[1.8] font-body font-light">
                <p>
                  브라우저가 렌더 트리를 모니터 픽셀 신호로 그리는 과정에서 웹의 체감 속도와 부드러운 스크롤을 결정짓는 절대적 요소가 바로 <span class="concept-badge">Reflow</span>와 <span class="concept-badge">Repaint</span> 연산입니다.
                </p>
                <p>
                  우수 프론트엔드 최적화 코드는 연산이 수십 배 무거운 리플로우(기하 연산)의 발생 횟수를 최소화하고, 리페인트 단계만 태우거나 GPU composite 가속(transform, opacity) 레이어로 가볍게 처리하도록 설계합니다.
                </p>
              </div>
            </div>

            <!-- Right Concept Callout (SVG Reflow/Repaint Diagram + Cards) -->
            <div class="lg:col-span-6 flex flex-col gap-4 justify-center">
              
              <!-- SVG Visual Comparison -->
              <div class="concept-card rounded-3xl p-4 shadow-2xl relative overflow-hidden select-none">
                <h4 class="text-xs font-black tracking-wider text-brandOrange uppercase mb-3">연산 비용 비교: 리플로우 vs 리페인트</h4>
                <div class="bg-slate-950/80 rounded-2xl p-2 border border-white/5 flex items-center justify-center h-32 overflow-hidden">
                  <svg class="w-full h-full" viewBox="0 0 450 110" xmlns="http://www.w3.org/2000/svg">
                    <!-- Left Section: Reflow -->
                    <g transform="translate(10, 5)">
                      <rect width="180" height="80" rx="12" fill="#111" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
                      <!-- Bounding Box dotted -->
                      <rect x="30" y="20" width="80" height="40" fill="none" stroke="#FF3E3E" stroke-dasharray="3,3" stroke-width="1.5" />
                      <!-- Scale arrow -->
                      <rect x="20" y="10" width="100" height="60" fill="none" stroke="#FF6B35" stroke-width="1.5" />
                      <!-- Arrows -->
                      <path d="M 120 40 L 135 40 M 130 35 L 135 40 L 130 45" stroke="#FF6B35" stroke-width="1.5" fill="none" />
                      <text x="70" y="44" fill="#FF6B35" font-size="8" font-family="'Inter'" font-weight="bold" text-anchor="middle">Layout 변형</text>
                      <text x="90" y="92" fill="#FF3E3E" font-size="8.5" font-family="'Pretendard'" font-weight="bold" text-anchor="middle">Reflow (매우 무거움)</text>
                    </g>
                    
                    <!-- Middle divider line -->
                    <line x1="225" y1="10" x2="225" y2="90" stroke="rgba(255,255,255,0.05)" stroke-dasharray="4,4" />
                    
                    <!-- Right Section: Repaint -->
                    <g transform="translate(240, 5)">
                      <rect width="180" height="80" rx="12" fill="#111" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
                      <!-- Fixed size box with color animation -->
                      <rect x="50" y="15" width="80" height="50" rx="6" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" stroke-width="2" />
                      <!-- Paint brush icon representation -->
                      <path d="M 60 40 L 70 30 L 80 40 Z" fill="#10B981" />
                      <text x="90" y="43" fill="#10B981" font-size="8" font-family="'Inter'" font-weight="bold" text-anchor="middle">Color / Style</text>
                      <text x="90" y="92" fill="#10B981" font-size="8.5" font-family="'Pretendard'" font-weight="bold" text-anchor="middle">Repaint (비교적 가벼움)</text>
                    </g>
                  </svg>
                </div>
              </div>

              <!-- Content Cards -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="p-4 bg-slate-900/60 border border-red-500/20 rounded-2xl space-y-1">
                  <span class="text-red-400 font-bold block text-sm flex items-center gap-1.5">
                    <i data-lucide="zap-off" class="w-4 h-4"></i> Layout (Reflow)
                  </span>
                  <p class="text-[10px] text-slate-400 leading-relaxed">
                    크기(Width/Height), 마진, 패딩 등이 바뀔 때 발생하며, 문서 노드 전체 배치를 재연산하는 무거운 작업입니다.
                  </p>
                </div>
                <div class="p-4 bg-slate-900/60 border border-brandGreen/20 rounded-2xl space-y-1">
                  <span class="text-brandGreen font-bold block text-sm flex items-center gap-1.5">
                    <i data-lucide="zap" class="w-4 h-4"></i> Paint (Repaint)
                  </span>
                  <p class="text-[10px] text-slate-400 leading-relaxed">
                    배경색, 글자 색 등 면적 변화 없는 규칙 적용 시 발생하며 기하 재연산 없이 빠르게 픽셀만 새로 칠합니다.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>`
  },
  {
    id: "browser-wars",
    classes: "p-8 md:p-16 lg:p-24 flex flex-col justify-center overflow-y-auto",
    contentHtml: `<div class="max-w-[1240px] space-y-6 w-full mx-auto">
          <span class="text-xs font-outfit uppercase tracking-[0.25em] text-brandOrange block">12 / LIVE SIMULATION</span>
          <h2 class="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white font-display tracking-tight leading-none">
            [실습] 렌더링 성능 최적화
          </h2>
          <div class="w-24 h-[3px] bg-brandOrange/70 my-6"></div>
          
          <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 items-center">
            <div class="text-base md:text-[18px] text-slate-200 space-y-4 leading-[1.9] font-body font-light">
              <p>
                웹 요소를 가공할 때 발생하는 브라우저 내부 파이프라인의 연산 횟수를 추적하는 실측 대시보드입니다.
              </p>
              <p>
                우측의 두 테스트 단추를 직접 번갈아 누르면서 누적 카운터를 확인해 보세요. 
                너비를 바꿀 때(리플로우 유발)는 레이아웃과 페인트 연산 두 개가 강제 동반되는 반면, 색상만 바꿀 때는 페인트 연산만 빠르게 올라가는 최적화 속도 편차를 관찰할 수 있습니다.
              </p>
            </div>

            <!-- Reflow/Repaint Dashboard simulator -->
            <div class="p-6 bg-cardBg border border-white/5 rounded-3xl space-y-4 shadow-xl">
              <div class="text-xs text-slate-500 font-mono flex items-center justify-between">
                <span>SIMULATOR: REFLOW vs REPAINT</span>
                <span class="text-red-400 font-bold font-mono">performance</span>
              </div>

              <!-- Action buttons -->
              <div class="flex gap-2">
                <button onclick="triggerSimReflow()" class="bg-red-600 hover:bg-red-500 text-white px-3 py-2.5 rounded-lg text-xs font-bold transition-all active:scale-95 cursor-pointer flex-1">너비 수정 (Reflow 유발)</button>
                <button onclick="triggerSimRepaint()" class="bg-brandGreen hover:bg-emerald-500 text-white px-3 py-2.5 rounded-lg text-xs font-bold transition-all active:scale-95 cursor-pointer flex-1">색상 수정 (Repaint만)</button>
              </div>

              <!-- Live simulation pipeline block -->
              <div class="relative h-20 bg-slate-950 border border-white/5 rounded-xl flex items-center justify-around px-2 font-mono text-[10px] font-bold">
                <div id="pipe-layout" class="px-3 py-1.5 bg-slate-900 border border-white/5 rounded text-slate-500 transition-colors">Layout (Reflow)</div>
                <div class="text-slate-650">➔</div>
                <div id="pipe-paint" class="px-3 py-1.5 bg-slate-900 border border-white/5 rounded text-slate-500 transition-colors">Paint (Repaint)</div>
              </div>

              <!-- Simulation score block -->
              <div class="grid grid-cols-2 gap-3 text-center text-xs font-bold">
                <div class="p-3 bg-slate-950 rounded-xl border border-white/5">
                  <div class="text-slate-500 mb-1">Reflow 연산 수</div>
                  <div id="score-reflow" class="text-red-400 text-lg font-mono">0</div>
                </div>
                <div class="p-3 bg-slate-950 rounded-xl border border-white/5">
                  <div class="text-slate-500 mb-1">Repaint 연산 수</div>
                  <div id="score-repaint" class="text-brandGreen text-lg font-mono">0</div>
                </div>
              </div>
            </div>
          </div>
        </div>`
  },
  {
    id: "jquery-react",
    classes: "p-8 md:p-16 lg:p-24 flex flex-col justify-center overflow-y-auto",
    contentHtml: `<div class="max-w-[1240px] space-y-6 w-full mx-auto">
          <span class="text-xs font-outfit uppercase tracking-[0.25em] text-brandOrange block">13 / EVOLUTIONARY HISTORY</span>
          <h2 class="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white font-display tracking-tight leading-none">
            웹 격동기: jQuery에서 React로
          </h2>
          <div class="w-24 h-[3px] bg-brandOrange/70 my-6"></div>
          <div class="text-base md:text-[18px] lg:text-[21px] text-slate-200 space-y-6 leading-[1.9] font-body font-light">
            <p>
              2000년대 후반, 웹 브라우저 호환성을 맞추며 DOM을 단순하게 다뤄주는 jQuery가 시장을 장악했습니다. 
              그러나 웹이 '간단한 홈페이지'에서 Gmail, Facebook 같은 '거대 어플리케이션(Web App)'으로 격변하면서 심각한 사태가 발생했습니다.
            </p>
            <p>
              데이터 상태(State)와 화면(UI)의 동기화가 끊어지기 시작한 것입니다. 
              예를 들어 장바구니 추가 버튼을 광클했을 때 데이터베이스 카운트는 3개인데 상단 헤더의 카트 글씨는 2개로 표시되는 등 **"직접 DOM을 수동으로 조작하는 방식"**은 엄청난 스파게티 코드와 버그를 잉태했습니다.
            </p>
            <div class="p-6 bg-slate-900 border border-panelBorder rounded-2xl text-slate-300 text-sm md:text-base">
              💥 <strong>상태 동기화 대위기:</strong> UI 복잡도가 올라갈수록 수작업으로 DOM의 클래스와 텍스트를 업데이트하는 코드는 지옥이 됩니다. 이 문제를 해결하기 위해 프레임워크가 등장했습니다.
            </div>
          </div>
        </div>`
  },
  {
    id: "framework-era",
    classes: "p-8 md:p-16 lg:p-24 flex flex-col justify-center overflow-y-auto",
    contentHtml: `<div class="max-w-[1240px] space-y-6 w-full mx-auto">
          <span class="text-xs font-outfit uppercase tracking-[0.25em] text-brandOrange block">14 / COMPONENT PARADIGM</span>
          <h2 class="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white font-display tracking-tight leading-none">
            React: 컴포넌트와 선언형 UI
          </h2>
          <div class="w-24 h-[3px] bg-brandOrange/70 my-6"></div>
          <div class="text-base md:text-[18px] lg:text-[21px] text-slate-200 space-y-6 leading-[1.9] font-body font-light">
            <p>
              2013년 페이스북이 공개한 **리액트(React)**는 패러다임을 바꿨습니다. 
              "데이터가 바뀌면 화면은 알아서 바뀐다"는 **선언형 UI(Declarative UI)**와 가상의 화면 메모리 맵인 **Virtual DOM**을 제안한 것입니다.
            </p>

            <!-- INFOGRAPHIC: React Component Stamping -->
            <div class="my-4 p-6 bg-cardBg border border-white/5 rounded-[24px] flex flex-col items-center select-none shadow-xl">
              <div class="text-[12px] text-slate-400 mb-3 font-mono">React Component Stamp (각 카드를 클릭해 보세요)</div>
              <div class="flex gap-6 items-center">
                <!-- Blueprint Component -->
                <div class="p-5 bg-orange-950/20 border border-brandOrange/30 rounded-xl text-center text-xs">
                  <div class="font-bold text-brandOrange text-sm md:text-base">Card Template</div>
                  <div class="text-[11px] text-slate-400 mt-1">Component Blueprint</div>
                </div>
                <div class="text-slate-650 text-xl font-bold">➔</div>
                <!-- Instance 1 -->
                <div onclick="incrementCounter('cnt-1')" class="p-5 bg-[#0A0A0A] border border-white/10 rounded-xl text-center cursor-pointer hover:border-brandOrange transition-colors select-none">
                  <div class="font-extrabold text-slate-200 text-sm md:text-base">Widget A</div>
                  <div class="text-sm text-brandOrange font-black mt-2" id="cnt-1">Clicks: 0</div>
                </div>
                <!-- Instance 2 -->
                <div onclick="incrementCounter('cnt-2')" class="p-5 bg-[#0A0A0A] border border-white/10 rounded-xl text-center cursor-pointer hover:border-brandOrange transition-colors select-none">
                  <div class="font-extrabold text-slate-200 text-sm md:text-base">Widget B</div>
                  <div class="text-sm text-brandOrange font-black mt-2" id="cnt-2">Clicks: 0</div>
                </div>
              </div>
            </div>

            <p>
              리액트에서는 개발자가 무거운 DOM 처리를 직접 다루지 않고 오직 **상태 데이터(State)**만 갱신해 줍니다. 
              그러면 리액트의 엔진이 Virtual DOM 간의 다른 점(Diffing)을 계산해 변경된 물리 노드만 초고속으로 동기화해 줍니다.
            </p>
          </div>
        </div>`
  },
  {
    id: "nodejs-npm",
    classes: "p-8 md:p-16 lg:p-24 flex flex-col justify-center overflow-y-auto",
    contentHtml: `<div class="max-w-[1240px] space-y-6 w-full mx-auto">
          <span class="text-xs font-outfit uppercase tracking-[0.25em] text-brandOrange block">15 / DEVELOPMENT PLATFORM</span>
          <h2 class="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white font-display tracking-tight leading-none">
            웹 조립 공장: Node.js와 npm
          </h2>
          <div class="w-24 h-[3px] bg-brandOrange/70 my-6"></div>
          <div class="text-base md:text-[18px] lg:text-[21px] text-slate-200 space-y-6 leading-[1.9] font-body font-light">
            <p>
              과거 자바스크립트는 브라우저 내부에서만 돌아가던 보조 장난감에 불과했습니다. 
              그러나 2009년 라이언 달(Ryan Dahl)에 의해 브라우저 외부 환경에서 돌아가는 실행기인 **Node.js**가 출시되면서 개발 생태계가 천지개벽을 겪었습니다.
            </p>
            <p>
              Node.js 환경을 바탕으로 2010년 패키지 앱스토어 격인 **npm(Node Package Manager)**이 도입되었습니다. 
              개발자들은 세계 각국의 천재들이 미리 완성해 놓은 바퀴(패키지 라이브러리)들을 단 한 줄의 터미널 명령어(\`npm install ...\`)로 손쉽게 내 컴퓨터에 조립하여 앱을 짓게 되었습니다.
            </p>
            <div class="p-6 bg-slate-900 border border-panelBorder rounded-2xl font-mono text-xs md:text-sm text-yellow-300">
              $ npm install lottie-web lucide<br/>
              <span class="text-slate-500"># 단 몇 초 만에 완성형 에셋 도구들을 다운로드하고 빌드 파이프라인에 조립합니다.</span>
            </div>
          </div>
        </div>`
  },
  {
    id: "build-system",
    classes: "p-8 md:p-16 lg:p-24 flex flex-col justify-center overflow-y-auto",
    contentHtml: `<div class="max-w-[1240px] space-y-6 w-full mx-auto">
          <span class="text-xs font-outfit uppercase tracking-[0.25em] text-brandOrange block">16 / BUILD & ECOSYSTEM</span>
          <h2 class="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white font-display tracking-tight leading-none">
            배포 준비: 트랜스파일링과 번들링
          </h2>
          <div class="w-24 h-[3px] bg-brandOrange/70 my-6"></div>
          <div class="text-base md:text-[18px] lg:text-[21px] text-slate-200 space-y-6 leading-[1.9] font-body font-light">
            <p>
              우리가 작성한 수천 장의 컴포넌트 파일을 브라우저가 다이렉트로 다운받아 실행하려면 엄청난 렉이 발생합니다. 
              이를 배포 가능한 최적의 소스 덩어리로 굽는 과정이 바로 **빌드(Build)**입니다.
            </p>

            <!-- INFOGRAPHIC: Build Pipeline Conveyor Belt -->
            <div class="my-4 p-6 bg-cardBg border border-white/5 rounded-[24px] flex flex-col items-center select-none shadow-xl">
              <svg class="w-full max-w-[480px] h-20 text-brandOrange" viewBox="0 0 400 60" fill="none">
                <!-- Conveyor Belt stages -->
                <rect x="5" y="12" width="85" height="30" rx="4" fill="#475569" />
                <text x="47.5" y="31" fill="#fff" font-size="9" font-weight="black" text-anchor="middle">개발 소스 (ES6)</text>
                <path d="M 90 27 H 105" stroke="#475569" stroke-width="1.8" />
                
                <rect x="105" y="12" width="85" height="30" rx="4" fill="#FF6B35" />
                <text x="147.5" y="31" fill="#0A0A0A" font-size="9" font-weight="black" text-anchor="middle">트랜스파일/번들</text>
                <path d="M 190 27 H 205" stroke="#FF6B35" stroke-width="1.8" />
                
                <rect x="205" y="12" width="85" height="30" rx="4" fill="#FF8C38" />
                <text x="247.5" y="31" fill="#0A0A0A" font-size="9" font-weight="black" text-anchor="middle">트리 쉐이킹</text>
                <path d="M 290 27 H 305" stroke="#FF8C38" stroke-width="1.8" />
                
                <rect x="305" y="12" width="90" height="30" rx="4" fill="#10B981" />
                <text x="350" y="31" fill="#FFFFFF" font-size="9" font-weight="black" text-anchor="middle">최적화 완료 (.js)</text>
              </svg>
            </div>

            <p>
              빌드 벨트 안에서는 구식 브라우저도 최신 모던 자바스크립트를 이해하도록 옛 버전으로 낮추어주는 **트랜스파일링(Transpiling)**, 수많은 파편 파일들의 연결망을 엮어 하나의 큰 뭉치로 말아주는 **번들링(Bundling)**, 그리고 빈 여백을 지우는 **압축 최적화(Minification)**가 실행되어 가볍고 완성도 높은 파일이 산출됩니다.
            </p>
          </div>
        </div>`
  },
  {
    id: "spa-intro",
    classes: "p-8 md:p-16 lg:p-24 flex flex-col justify-center overflow-y-auto",
    contentHtml: `<div class="max-w-[1240px] space-y-6 w-full mx-auto">
          <span class="text-xs font-outfit uppercase tracking-[0.25em] text-brandOrange block">17 / USER EXPERIENCE</span>
          <h2 class="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white font-display tracking-tight leading-none">
            사용자 경험: SPA의 등장
          </h2>
          <div class="w-24 h-[3px] bg-brandOrange/70 my-6"></div>
          <div class="text-base md:text-[18px] lg:text-[21px] text-slate-200 space-y-6 leading-[1.9] font-body font-light">
            <p>
              기존의 전통적인 웹은 다른 페이지 링크를 클릭하면 브라우저 전체가 깜빡거리며 하얀 화면이 잠시 스쳐 간 뒤 새 문서를 받아오는 **MPA(Multi Page Application)** 방식이었습니다. 
              이는 모바일 네이티브 앱 같은 끈김 없는 스크롤 경험을 방해했습니다.
            </p>
            <p>
              스마트폰 대중화와 함께 정립된 **SPA (Single Page Application)**는 브라우저가 최초 단 한 번만 HTML 구조를 다운받아 두고, 
              이후 페이지 이동 시에는 브라우저를 새로고침하지 않고 **자바스크립트가 필요한 컴포넌트 정보 레이어만 실시간으로 탈부착 교체**하는 현대식 뷰포트 교안 아키텍처입니다.
            </p>
            <div class="p-6 bg-slate-900 border border-panelBorder rounded-2xl text-slate-350 text-xs md:text-sm">
              ✨ <strong>현재 보시는 이 웹 교안도 SPA입니다!</strong> 상단 URL 주소나 브라우저 전체 창의 깜빡임 없이 오직 중간의 슬라이드 레이어만 페이드아웃/인 교차되는 것을 체감하실 수 있습니다.
            </div>
          </div>
        </div>`
  },
  {
    id: "spa-ssr",
    classes: "p-8 md:p-16 lg:p-24 flex flex-col justify-center overflow-y-auto",
    contentHtml: `<div class="max-w-[1240px] space-y-6 w-full mx-auto">
          <span class="text-xs font-outfit uppercase tracking-[0.25em] text-brandOrange block">18 / MODERN ARCHITECTURE</span>
          <h2 class="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white font-display tracking-tight leading-none">
            첫 속도 극복: SSR과 하이드레이션
          </h2>
          <div class="w-24 h-[3px] bg-brandOrange/70 my-6"></div>
          <div class="text-base md:text-[18px] lg:text-[21px] text-slate-200 space-y-6 leading-[1.8] font-body font-light">
            <p>
              SPA 방식은 초기 구동 시 엄청난 자바스크립트 소스 묶음을 다운받아야 해서, 맨 처음 흰 화면이 매우 오래 유지되는 치명적 한계를 드러냈습니다. 
              더구나 검색엔진 로봇들이 빈 껍데기 HTML만 긁어가서 노출 순위가 깎이는 SEO 취약점도 낳았습니다.
            </p>
            <p>
              이를 해소하기 위해 서버에서 뼈대가 미리 완성된 정적 HTML을 선 조제하여 유저에게 광속으로 꽂아주는 **SSR (Server Side Rendering)**이 부상했습니다.
            </p>
            <div class="bg-orange-950/20 border-l-4 border-brandOrange p-6 rounded-r-2xl text-sm md:text-base leading-relaxed">
              <strong class="block text-lg mb-1 text-brandOrange font-bold">마법의 순간: 하이드레이션 (Hydration)</strong>
              서버가 미리 렌더링한 바싹 마른 정적 HTML(정적 마크업)에 클라이언트용 자바스크립트 모듈 소스를 부착하여, 
              마치 마른 흙에 수분(Water)을 골고루 주입해 생명을 불어넣듯 클릭/스크롤 인터랙티브 이벤트가 동적으로 통신 및 반응하게 만드는 과정을 일컫습니다.
            </div>
          </div>
        </div>`
  },
  {
    id: "workshop-step1",
    classes: "p-6 md:p-12 lg:p-16 flex flex-col justify-center overflow-y-auto",
    contentHtml: `<div class="max-w-[1240px] w-full mx-auto bg-cardBg rounded-[2rem] p-6 md:p-8 border border-white/5 relative overflow-hidden shadow-2xl">
          <div class="absolute -top-12 -right-12 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div class="relative z-10 space-y-5">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-white/5 pb-3">
              <div>
                <span class="flex items-center gap-1.5 text-brandOrange text-[11px] font-bold tracking-widest uppercase">
                  <span class="w-1.5 h-1.5 rounded-full bg-brandOrange animate-pulse"></span>
                  실습 워크숍 (STEP 1)
                </span>
                <h3 class="text-xl font-bold text-white mt-0.5 font-display">1단계: DESIGN.md 명세서 빌더</h3>
              </div>
              <button onclick="loadSampleStep1()" class="px-4 py-2 bg-slate-950 border border-white/10 hover:border-brandOrange rounded-lg text-xs font-bold transition-all hover:bg-orange-950/20 text-brandOrange cursor-pointer">
                샘플 명함 데이터 로드
              </button>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <!-- Left inputs -->
              <div class="lg:col-span-7 space-y-4 text-xs font-semibold">
                <div>
                  <label class="block text-[11px] text-slate-400 uppercase tracking-wider mb-2">1. 원본 명함 및 브랜드 무드 선택</label>
                  <div class="grid grid-cols-2 gap-2 font-body text-xs">
                    <label class="flex items-center gap-2 p-3 bg-slate-950/40 rounded-xl border border-white/5 cursor-pointer hover:border-brandOrange/40">
                      <input type="radio" name="moodStyle" value="cozy-linen" checked onchange="updateStep1Prompt()" class="accent-brandOrange">
                      <span class="text-slate-200">따뜻한 리넨 (Cozy Linen)</span>
                    </label>
                    <label class="flex items-center gap-2 p-3 bg-slate-950/40 rounded-xl border border-white/5 cursor-pointer hover:border-brandOrange/40">
                      <input type="radio" name="moodStyle" value="neon-cyber" onchange="updateStep1Prompt()" class="accent-brandOrange">
                      <span class="text-slate-200">네온 사이버 (Neon Cyber)</span>
                    </label>
                  </div>
                </div>

                <div class="space-y-3 font-body">
                  <div>
                    <label class="block text-[11px] text-slate-400 uppercase tracking-wider mb-1">2. 명함 색상 정보 입력 (HEX mapping)</label>
                    <input type="text" id="step1Colors" oninput="updateStep1Prompt()" placeholder="배경: #0A0A0A, 텍스트: #FFFFFF, 악센트: #FF6B35" 
                           class="w-full bg-slate-950/60 border border-white/5 rounded-xl px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-brandOrange" />
                  </div>
                  <div>
                    <label class="block text-[11px] text-slate-400 uppercase tracking-wider mb-1">3. 대표 타이포그래피 설정</label>
                    <input type="text" id="step1Fonts" oninput="updateStep1Prompt()" placeholder="헤드라인: Outfit Serif, 본문: Pretendard" 
                           class="w-full bg-slate-950/60 border border-white/5 rounded-xl px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-brandOrange" />
                  </div>
                </div>
              </div>

              <!-- Right Output -->
              <div class="lg:col-span-5 space-y-3">
                <div class="flex justify-between items-center text-xs">
                  <span class="text-slate-400 uppercase tracking-wider">조립 결과 (PROMPT VIEW)</span>
                  <a href="https://gemini.google.com/app" target="_blank" class="text-brandOrange hover:underline font-bold flex items-center gap-1">
                    Gemini로 이동 <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                  </a>
                </div>
                <div class="bg-slate-950/80 border border-white/5 rounded-[24px] p-4 h-[240px] overflow-y-auto relative shadow-inner">
                  <pre id="outputStep1Prompt" class="text-xs text-orange-200/90 font-mono whitespace-pre-wrap select-all leading-relaxed">데이터를 입력하세요...</pre>
                </div>
                <button onclick="copyStep1Prompt()" id="btnCopyStep1" class="w-full flex items-center justify-center gap-1.5 py-2.5 bg-brandOrange hover:bg-brandOrangeLight text-white rounded-xl text-xs font-extrabold uppercase transition-all shadow-md active:scale-95 cursor-pointer">
                  <i data-lucide="copy" class="w-4 h-4"></i> 클립보드 복사하기
                </button>
              </div>
            </div>
          </div>
        </div>`
  },
  {
    id: "workshop-step2",
    classes: "p-6 md:p-12 lg:p-16 flex flex-col justify-center overflow-y-auto",
    contentHtml: `<div class="max-w-[1480px] w-full mx-auto bg-cardBg rounded-[2rem] p-8 md:p-10 border border-white/5 relative overflow-hidden shadow-2xl">
          <div class="absolute -top-12 -right-12 w-32 h-32 bg-brandOrange/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div class="relative z-10 space-y-6">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-white/5 pb-4">
              <div>
                <span class="flex items-center gap-1.5 text-brandOrange text-[11px] font-bold tracking-widest uppercase">
                  <span class="w-1.5 h-1.5 rounded-full bg-brandOrange animate-pulse"></span>
                  실습 워크숍 (STEP 2)
                </span>
                <h3 class="text-2xl font-bold text-white mt-1 font-display">2단계: HTML 프롬프트 빌더</h3>
              </div>
              <button onclick="document.getElementById('designMdText').value = '## design_tokens:\n- colors: { bg: \'#000\', primary: \'#FF3E3E\' }\n- fonts: [\'Inter\']'; updateStep2Prompt();" class="px-4 py-2 bg-slate-950 border border-white/10 hover:border-brandOrange rounded-lg text-xs font-bold transition-all hover:bg-orange-950/20 text-brandOrange cursor-pointer">
                테스트 명세 자동 로드
              </button>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <!-- Left inputs (Expanded textarea height) -->
              <div class="lg:col-span-6 space-y-5 text-xs font-semibold">
                <div>
                  <label class="block text-[11px] text-slate-400 uppercase tracking-wider mb-2">1. [필수] 1단계 결과물 (DESIGN.md 데이터) 붙여넣기</label>
                  <textarea id="designMdText" oninput="updateStep2Prompt()" rows="8" placeholder="## design_tokens: ... 부터 복사하여 붙여넣으세요. 넓고 시원한 입력칸입니다." 
                            class="w-full bg-slate-950/60 border border-white/5 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-brandOrange font-mono leading-relaxed resize-y min-h-[180px]"></textarea>
                </div>
                <div>
                  <label class="block text-[11px] text-slate-400 uppercase tracking-wider mb-3">2. 커스텀 변주 지침 선택 (중복 가능)</label>
                  <div class="grid grid-cols-2 gap-3 font-body text-xs">
                    <label class="flex items-center gap-3 p-3 bg-slate-950/40 rounded-xl border border-white/5 cursor-pointer hover:border-brandOrange/40">
                      <input type="checkbox" id="modBento" onchange="updateStep2Prompt()" class="accent-brandOrange w-4 h-4">
                      <span class="text-slate-200">Bento Grid (벤토 바둑판)</span>
                    </label>
                    <label class="flex items-center gap-3 p-3 bg-slate-950/40 rounded-xl border border-white/5 cursor-pointer hover:border-brandOrange/40">
                      <input type="checkbox" id="modSplit" onchange="updateStep2Prompt()" class="accent-brandOrange w-4 h-4">
                      <span class="text-slate-200">Split Column (좌우 반분 고정)</span>
                    </label>
                    <label class="flex items-center gap-3 p-3 bg-slate-950/40 rounded-xl border border-white/5 cursor-pointer hover:border-brandOrange/40">
                      <input type="checkbox" id="modScramble" onchange="updateStep2Prompt()" class="accent-brandOrange w-4 h-4">
                      <span class="text-slate-200">Text Scramble (디코더 효과)</span>
                    </label>
                    <label class="flex items-center gap-3 p-3 bg-slate-950/40 rounded-xl border border-white/5 cursor-pointer hover:border-brandOrange/40">
                      <input type="checkbox" id="modNoise" onchange="updateStep2Prompt()" class="accent-brandOrange w-4 h-4">
                      <span class="text-slate-300 font-bold">Film Grain (노이즈 오버레이)</span>
                    </label>
                  </div>
                </div>
              </div>

              <!-- Right Output (Expanded prompt container height & Premium Gemini Logo Button) -->
              <div class="lg:col-span-6 space-y-4">
                <div class="flex justify-between items-center text-xs">
                  <span class="text-slate-400 uppercase tracking-wider font-bold">조립 결과 (PROMPT VIEW)</span>
                  
                  <!-- Styled Gemini Logo & Action Button -->
                  <a href="https://gemini.google.com/app" target="_blank" 
                     class="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-display text-xs font-black shadow-md transition-all duration-300 hover:scale-[1.03] active:scale-95">
                    <!-- Google Gemini Sparkle Logo Icon -->
                    <svg class="w-4 h-4 text-white animate-pulse" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C12 2 12.5 7.5 15.5 10.5C18.5 13.5 24 14 24 14C24 14 18.5 14.5 15.5 17.5C12.5 20.5 12 26 12 26C12 26 11.5 20.5 8.5 17.5C5.5 14.5 0 14 0 14C0 14 5.5 13.5 8.5 10.5C11.5 7.5 12 2 12 2Z"/>
                    </svg>
                    <span>Gemini로 이동</span>
                  </a>
                </div>
                <div class="bg-slate-950/90 border border-white/10 rounded-[24px] p-5 h-[340px] overflow-y-auto relative shadow-inner">
                  <pre id="outputPromptArea" class="text-xs text-orange-200/90 font-mono whitespace-pre-wrap select-all leading-relaxed">데이터를 입력하세요...</pre>
                </div>
                <button onclick="copyPromptToClipboard()" id="btnCopyPrompt" class="w-full flex items-center justify-center gap-2 py-3 bg-brandOrange hover:bg-brandOrangeLight text-white rounded-xl text-xs font-extrabold uppercase transition-all shadow-md active:scale-95 cursor-pointer">
                  <i data-lucide="copy" class="w-4 h-4"></i> 클립보드 복사하기
                </button>
              </div>
            </div>
          </div>
        </div>`
  },
  {
    id: "quiz",
    classes: "p-6 md:p-12 lg:p-16 flex flex-col justify-center overflow-y-auto",
    contentHtml: `<div class="max-w-[1240px] w-full mx-auto bg-cardBg rounded-[2rem] p-8 md:p-10 border border-brandOrange/25 relative overflow-hidden shadow-2xl space-y-6">
          <div class="flex justify-between items-center border-b border-white/5 pb-4">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-brandOrange animate-ping"></span>
              <span class="text-xs font-display font-black text-slate-350 tracking-widest uppercase">MOKPO AI LAB — REALTIME QUIZ</span>
            </div>
            <span class="text-xs text-slate-500 font-mono">Hosted by Odyssey</span>
          </div>

          <div class="space-y-6 text-left">
            <h4 class="text-lg md:text-xl font-extrabold text-white leading-relaxed">
              Q. 서버사이드 렌더링(SSR) 방식으로 서빙된 정적 HTML 문서에 자바스크립트 이벤트 바인딩을 주착하여 동적으로 기능하게 만드는 과정을 무엇이라 부르나요?
            </h4>

            <!-- Interactive MCQ Options (Taller with larger paddings) -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-body text-xs md:text-sm">
              <label onclick="selectQuizOption(1)" id="opt-1" class="flex items-center gap-4 p-5 bg-slate-950/40 rounded-xl border border-white/5 cursor-pointer hover:border-brandOrange/40 transition-colors select-none min-h-[70px]">
                <span class="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center font-mono text-xs text-slate-400 group-checked:bg-brandOrange">1</span>
                <span class="text-slate-200">Reflow (리플로우)</span>
              </label>
              <label onclick="selectQuizOption(2)" id="opt-2" class="flex items-center gap-4 p-5 bg-slate-950/40 rounded-xl border border-white/5 cursor-pointer hover:border-brandOrange/40 transition-colors select-none min-h-[70px]">
                <span class="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center font-mono text-xs text-slate-400">2</span>
                <span class="text-slate-200">Transpiling (트랜스파일링)</span>
              </label>
              <label onclick="selectQuizOption(3)" id="opt-3" class="flex items-center gap-4 p-5 bg-slate-950/40 rounded-xl border border-white/5 cursor-pointer hover:border-brandOrange/40 transition-colors select-none min-h-[70px]">
                <span class="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center font-mono text-xs text-slate-400">3</span>
                <span class="text-slate-200 font-bold text-brandOrange">Hydration (하이드레이션)</span>
              </label>
              <label onclick="selectQuizOption(4)" id="opt-4" class="flex items-center gap-4 p-5 bg-slate-950/40 rounded-xl border border-white/5 cursor-pointer hover:border-brandOrange/40 transition-colors select-none min-h-[70px]">
                <span class="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center font-mono text-xs text-slate-400">4</span>
                <span class="text-slate-200">Tree Shaking (트리 쉐이킹)</span>
              </label>
            </div>

            <!-- Custom User Explanation input to ask Gemini (Expanded rows height) -->
            <div class="space-y-2">
              <label class="block text-xs text-slate-400 font-bold uppercase tracking-wider">추가 서술 의견 (선택사항 - AI에게 채점 의도 전달)</label>
              <textarea id="quizExplanation" rows="5" placeholder="그렇게 생각한 이유나 AI에게 물어보고 싶은 추가 질문을 여기에 적어주세요. 넉넉하고 시원한 작성 칸입니다." 
                        class="w-full bg-slate-950/60 border border-white/5 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-brandOrange leading-relaxed min-h-[120px]"></textarea>
            </div>

            <!-- Grade and Ask Gemini Action button -->
            <button onclick="runQuizGrading()" class="w-full flex items-center justify-center gap-2 py-4 bg-brandOrange hover:bg-brandOrangeLight text-white rounded-xl text-xs md:text-sm font-extrabold uppercase transition-all shadow-md active:scale-95 cursor-pointer">
              <i data-lucide="sparkles" class="w-4 h-4"></i> Gemini AI 실시간 채점 및 피드백 받기
            </button>

            <!-- Gemini Response viewport -->
            <div id="quizResultArea" class="hidden p-4 bg-slate-950 border border-white/5 rounded-2xl text-xs space-y-2 max-h-[220px] overflow-y-auto font-mono">
              <!-- Dynamically populated -->
            </div>
          </div>
        </div>`
  }
];

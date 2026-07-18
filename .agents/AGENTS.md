# Rules

## 터미널 명령어 경로 자동 포함 규칙 (Terminal Command Paths)
- 인공지능 에이전트(Antigravity)가 사용자에게 터미널에서 실행할 명령어를 제안할 때, 사용자가 경로 오류를 겪지 않도록 **반드시 명령어 블록의 가장 첫 줄에 프로젝트 폴더 이동 경로 명령어(`cd C:\Users\IN\Desktop\mokpo-ai-curriculum`)를 명시**해야 합니다.
- 예시:
  ```powershell
  cd C:\Users\IN\Desktop\mokpo-ai-curriculum
  git branch
  ```

## 교안 빌더 스킬 자동 연동 규칙 (Curriculum Builder Integration)
- 사용자가 이 프로젝트 내에서 교안 사이트(index.html 등)의 생성, 설계 변경 또는 스타일 수정을 지시할 경우, 에이전트는 반드시 `.agents/skills/web-curriculum-builder/SKILL.md`에 정의된 디자인 표준(Warm 미색 배경, Ink 블랙 텍스트) 및 대화형 컨셉 플레이그라운드 설계 가이드를 사전에 검토하고 이를 100% 반영하여 작업해야 합니다.

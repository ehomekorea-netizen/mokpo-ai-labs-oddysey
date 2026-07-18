# Rules

## 터미널 명령어 경로 자동 포함 규칙 (Terminal Command Paths)
- 인공지능 에이전트(Antigravity)가 사용자에게 터미널에서 실행할 명령어를 제안할 때, 사용자가 경로 오류를 겪지 않도록 **반드시 명령어 블록의 가장 첫 줄에 프로젝트 폴더 이동 경로 명령어(`cd C:\Users\IN\Desktop\mokpo-ai-curriculum`)를 명시**해야 합니다.
- 예시:
  ```powershell
  cd C:\Users\IN\Desktop\mokpo-ai-curriculum
  git branch
  ```

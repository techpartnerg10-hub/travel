// 유틸리티 함수들

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

// 추가 유틸리티 함수들을 여기에 추가할 예정

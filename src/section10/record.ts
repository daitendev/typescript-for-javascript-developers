export { }

// Record<K, T>

type Prefecture = 'Tokyo' | 'Osaka' | 'Fukuoka'

type Covid19InfectionInfo = {
  kanji_name: string
  confirmed_cases: number
}

const covid19Japan: Record<Prefecture, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 3 },
  Osaka: { kanji_name: '大阪', confirmed_cases: 3 },
  Fukuoka: { kanji_name: '福岡', confirmed_cases: 3 },
}
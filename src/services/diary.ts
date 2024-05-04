import diaryData from './diaries.json'
import {
  DiaryEntry,
  NewDiaryEntry,
  NonSensitiveInfoDiaryEntry
} from '../types'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (
  id: number
): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find((d) => d.id === id)

  if (entry != null) {
    const { comment, ...rest } = entry
    return rest
  }
  return undefined
}

export const getEntriesWithoutSensitiveInfo =
  (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => ({
      id,
      date,
      weather,
      visibility
    }))
  }

export const addEntry = ({
  date,
  weather,
  visibility,
  comment
}: NewDiaryEntry): DiaryEntry => {
  const newDiaryEntry = {
    id: diaries.length + 1,
    date,
    weather,
    visibility,
    comment
  }

  diaries.push(newDiaryEntry)
  return newDiaryEntry
}

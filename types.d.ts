type Match = {
  home: string
  away: string
  homeLeague: string | number
  awayLeague: string | number
  result?: string
  identifier?: number
  date?: string
  live?: boolean
}

type Data = { [key: string]: Match[] }

type MatchProps = {
  home: string
  away: string
  result?: string
  identifier?: number
  date?: string
  live?: boolean
}

type RoundProps = {
  matches: Match[]
  title: string
}
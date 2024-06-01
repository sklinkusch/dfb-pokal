type Indicator = "f" | "m"

type Match = {
  home: string
  away: string
  homeLeague: string
  awayLeague: string
  result?: string
  identifier?: number
  date?: string
  live?: boolean
}

type ListGenObject = {
  home?: string
  away?: string
  num?: number 
  matches?: Match[]
}

type ListObject = {
  home: string
  away: string
  num: number 
  matches: Match[]
}

type Data = { [key: string]: (Match | undefined)[] }

type MatchProps = {
  home: string
  away: string
  result?: string
  identifier?: number
  date?: string
  live?: boolean
}

type RoundProps = {
  matches: (Match | undefined)[]
  title: string
  type: "f" | "m"
}

type Team = {
  name: string
  league: string
}

type Teams = { [key: string]: Team }
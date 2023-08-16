import Match from '@/components/Match'
import styles from '@/styles/index.module.css'

function getLeagues (indicator: Indicator) {
  let leagues: { [key: string]: string } = {}
  switch (indicator) {
    case "f":
      leagues = {
        '1': '1. Bundesliga',
        '2': '2. Bundesliga',
        '3': 'Regionalliga',
        '3N': 'Regionalliga Nord',
        '3NO': 'Regionalliga Nordost',
        '3S': 'Regionalliga Süd',
        '3SW': 'Regionalliga Südwest',
        '3W': 'Regionalliga West',
        '4': '4. Liga',
        '4B': 'Verbandsliga Berlin',
        '4BB': 'Verbandsliga Brandenburg',
        '4BW': 'Oberliga Baden-Württemberg',
        '4BY': 'Bayernliga',
        '4HB': 'Verbandsliga Bremen',
        '4HE': 'Hessenliga',
        '4HH': 'Verbandsliga Hamburg',
        '4MV': 'Verbandsliga Mecklenburg-Vorpommern',
        '4MR': 'Verbandsliga Mittelrhein',
        '4NIO': 'Niedersachsenliga Ost',
        '4NIW': 'Niedersachsenliga West',
        '4NR': 'Verbandsliga Niederrhein',
        '4RL': 'Verbandsliga Rheinland',
        '4SA': 'Verbandsliga Sachsen-Anhalt',
        '4SH': 'Verbandsliga Schleswig-Holstein',
        '4SL': 'Verbandsliga Saarland',
        '4SN': 'Landesliga Sachsen',
        '4SW': 'Verbandsliga Südwest',
        '4TH': 'Verbandsliga Thüringen',
        '4WF': 'Westfalenliga'
      }
      break
    case "m":
      leagues = {
        '1': '1. Bundesliga',
        '2': '2. Bundesliga',
        '3': '3. Liga',
        '4': 'Regionalliga',
        '4BY': 'Regionalliga Bayern',
        '4N': 'Regionalliga Nord',
        '4NO': 'Regionalliga Nordost',
        '4SW': 'Regionalliga Südwest',
        '4W': 'Regionalliga West',
        '5': 'Oberliga',
        '5BW': 'Oberliga Baden-Württemberg',
        '5BY': 'Bayernliga',
        '5HB': 'Bremen-Liga',
        '5HE': 'Hessenliga',
        '5HH': 'Oberliga Hamburg',
        '5MR': 'Mittelrheinliga',
        '5NI': 'Oberliga Niedersachsen',
        '5NO': 'Oberliga Nordost',
        '5NR': 'Oberliga Niederrhein',
        '5RS': 'Oberliga Rheinland-Pfalz/Saar',
        '5SH': 'Oberliga Schleswig-Holstein',
        '5WF': 'Oberliga Westfalen',
        '6': '6. Liga',
        '6B': 'Berlin-Liga',
        '6BB': 'Brandenburg-Liga',
        '6BD': 'Verbandsliga Baden',
        '6BY': 'Landesliga Bayern',
        '6HB': 'Landesliga Bremen',
        '6HE': 'Verbandsliga Hessen',
        '6HH': 'Landesliga Hamburg',
        '6MR': 'Landesliga Mittelrhein',
        '6MV': 'Verbandsliga Mecklenburg-Vorpommern',
        '6NI': 'Landesliga Niedersachsen',
        '6NR': 'Landesliga Niederrhein',
        '6RL': 'Rheinlandliga',
        '6SA': 'Verbandsliga Sachsen-Anhalt',
        '6SB': 'Verbandsliga Südbaden',
        '6SH': 'Landesliga Schleswig-Holstein',
        '6SL': 'Saarlandliga',
        '6SN': 'Sachsenliga',
        '6SW': 'Verbandsliga Südwest',
        '6TH': 'Thüringenliga',
        '6WB': 'Verbandsliga Württemberg',
        '6WF': 'Westfalenliga'
      }
      break
  }
  return leagues
}

export default function Round({matches, title, type}: RoundProps) {
  const leagues = getLeagues(type)
  const leagueIdentifiers = Object.keys(leagues).sort((a: string, b: string) => {
    if (Number(a.charAt(0)) > Number(b.charAt(0))) return -1
    if (Number(a.charAt(0)) < Number(b.charAt(0))) return +1
    const aRem = a.substring(1)
    const bRem = b.substring(1)
    if (aRem.length === 0 && bRem.length !== 0) return +1
    if (bRem.length === 0 && aRem.length !== 0) return -1
    if (aRem.length === 0 && bRem.length === 0) return 0
    if (aRem < bRem) return -1
    if (bRem < aRem) return +1
    return 0
  })
  const majorLeagueIdentifiers = leagueIdentifiers.filter(item => item.length === 1)
  const leagueIdentifiersPerMajor = majorLeagueIdentifiers.reduce((acc: { [key: string]: string[]}, curr: string) => {
    acc[curr] = leagueIdentifiers.filter(identifier => {
      if (['1', '2'].includes(identifier) && identifier === curr) return true
      if (identifier === '3' && identifier === curr && type === 'm') return true
      if (['1', '2'].includes(identifier) && identifier !== curr) return false
      return identifier.startsWith(curr) && identifier !== curr
    })
    return acc
  },{})
  const majorMatches = majorLeagueIdentifiers.reduce((hacc: ListObject[], hcurr, outerIndex: number) => {
    const majorAMatches = majorLeagueIdentifiers.slice(outerIndex).reduce((aacc: ListObject[], acurr) => {
      const obj: any = {}
      obj['home'] = hcurr
      obj['away'] = acurr
      if (hcurr === acurr) {
        obj['matches'] = matches.filter(match => match.homeLeague.startsWith(hcurr) && match.awayLeague.startsWith(acurr))
        obj['num'] = obj['matches'].length
        aacc.push(obj)
      } else {
        const matchA = matches.filter(match => match.homeLeague.startsWith(hcurr) && match.awayLeague.startsWith(acurr))
        const matchB = matches.filter(match => match.homeLeague.startsWith(acurr) && match.awayLeague.startsWith(hcurr))
        obj['matches'] = [ ...matchA, ...matchB ]
        obj['num'] = matchA.length + matchB.length
        aacc.push(obj)
      }
      return aacc
    },[])
    return hacc.concat(majorAMatches)
  },[])
  const minorMatches = leagueIdentifiers.reduce((hacc: ListObject[], hcurr, outerIndex: number) => {
    const minorAMatches = leagueIdentifiers.slice(outerIndex).reduce((aacc: ListObject[], acurr) => {
      const obj: any = {}
      obj['home'] = hcurr
      obj['away'] = acurr
      if (hcurr === acurr) {
        obj['matches'] = matches.filter(match => match.homeLeague === hcurr && match.awayLeague === acurr)
        obj['num'] = obj['matches'].length
        aacc.push(obj)
      } else {
        const matchA = matches.filter(match => match.homeLeague === hcurr && match.awayLeague === acurr)
        const matchB = matches.filter(match => match.homeLeague === acurr && match.awayLeague === hcurr)
        obj['matches'] = [ ...matchA, ...matchB ]
        obj['num'] = matchA.length + matchB.length
        aacc.push(obj)
      }
      return aacc
    },[])
    return hacc.concat(minorAMatches)
  },[])
  return (
    <>
      <h2 className={styles.h2}>{title}</h2>
      {majorMatches.map((majorListObject: ListObject, idx: number) => {
        return majorListObject.num > 0 ? (
          <div key={`${title}_major_${idx}`}>
            <h3 className={styles.h3}>{leagues[majorListObject.home]} - {leagues[majorListObject.away]}</h3>
            {minorMatches.filter((minorObject: ListObject) => {
              const A1 = leagueIdentifiersPerMajor[majorListObject.home].includes(minorObject.home)
              const A2 = leagueIdentifiersPerMajor[majorListObject.away].includes(minorObject.away)
              const B1 = leagueIdentifiersPerMajor[majorListObject.home].includes(minorObject.away)
              const B2 = leagueIdentifiersPerMajor[majorListObject.away].includes(minorObject.home)
              const A = A1 && A2
              const B = B1 && B2 
              return A || B
            }).map((minorObject: ListObject, idy: number) => {
              return minorObject.num > 0 ? (
                <div key={`${title}_minor_${idy}`}>
                  {(minorObject.home !== majorListObject.home || minorObject.away !== majorListObject.away) && <h4>{leagues[minorObject.home]} - {leagues[minorObject.away]}</h4>}
                  {minorObject.matches.sort((a:Match, b: Match) => {
                    if (a.date && b.date) {
                      if (a.date < b.date) return -1
                      if (a.date > b.date) return +1
                      return 0
                    }
                    return 0
                  }).map((match: Match, ind: number) => {
                    const { home, away, date, result, identifier, live } = match
                    return <Match key={ind} home={home} away={away} date={date} result={result} identifier={identifier} live={live} />
                  })}
                </div>
              ) : null
            })}
          </div>
        ) : null
      })}
    </>
  )
}
import instance from 'api'

export const fetchLocation = (location: string) => instance.get(`locations?query=${location}&results=1`).then((response) => response).catch(() => ({}))

export const fetchJourney = (fromId: string, toId: any, dateTime: number) => instance.get(`stops/${fromId}/departures?direction=${toId}&when=${dateTime}&lang=en`).then((response) => response).catch(() => ({}))

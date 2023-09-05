export interface Episodios {
    description: string
    episode_count: number
    group_count: number
    id: string
    name: string
    type: number
    network?: Network
  }

  export interface Network {
    id: number
    logo_path: string
    name: string
    origin_country: string
  }
  
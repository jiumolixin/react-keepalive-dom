import type { ReactElement } from "react"
export enum CacheStatus {
  CREATE = "CREATE",
  CREATED = "CREATED",
  ACTIVE = "ACTIVE",
  DESTROY = "DESTROY"
}
//dispatch类型
export type ICacheDispatch = {
  type: CacheStatus[keyof CacheStatus]
  payload: any
}

export type ICacheContext = {
  cacheStates: ICacheState
  dispatch: (arg: ICacheDispatch) => void
  mount: ({
    cacheId,
    reactElement
  }: {
    cacheId: string
    reactElement: ReactElement
  }) => void
  handleScroll: (cacheId: string, event: any) => void
  destroyCache:(cacheId:string)=>void
}
export type ICacheState = {
  [k in string]: {
    cacheId: string
    reactElement: ReactElement
    status: string
    doms: any[]
    scrolls: { [k in any]: number }
  }
}

interface ILicenceByOrganization{
  apiVersion:string
  status: string
  items: Array<IItem>
  totalCount: number
  errorCode: string
  errorMessage: string
  isOutDoorSBox: boolean
}

interface IOrgLicenseEntity {
    maxLicenseCount: number
    usedLicenseCount: number
    assigned: boolean
    productCode: string
    productName: string
}

interface IItem {
    orgLicenseEntities: IOrgLicenseEntity[]
    organizationId: number
    organizationName: string
}

interface ILoginResponse {
    token: string
    refreshToken: string
    dateFormat: string
    timeFormat: string
    scheduleFirstDay: string
}
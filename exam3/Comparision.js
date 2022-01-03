const houses = [
    {
        id: 1,
        name: "House 1",
        tenant: 1
    },
    {
        id: 2,
        name: "House 2",
        tenant: 2
    }
]

const tenants = [
    {
        id: 1,
        name: "Tenant 1"
    },
    {
        id: 2,
        name: "Tenant 2"
    }
]

/*
Object Oriented
 */
const mappedHouses = []
for (let house of houses) {
    for (let tenant of tenants) {
        if (tenant.id === house.tenant)
            mappedHouses.push({...house, tenant})
    }
}
console.log(mappedHouses)

/*
Functional
 */
const functionalMappedHouses = houses.map(house => ({
    ...house,
    tenant: tenants.find(tenant => tenant.id === house.tenant)
}))
console.log(functionalMappedHouses)
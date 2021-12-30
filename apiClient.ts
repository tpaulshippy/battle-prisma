const baseUrl = "http://localhost:3001"

const ApiClient = {
    async getCards(): Promise<any> {
        const res = await fetch(`${baseUrl}/cards`)
        const data = await res.json()
        return data
    },
    async getCard(id: number): Promise<any> {
        const res = await fetch(`${baseUrl}/cards/${id}`)
        const data = await res.json()
        return data
    },
    async addCard(body: {name: string, hp: number}): Promise<Response> {
        return await fetch(`${baseUrl}/cards`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
          })    
    },
    
    async update(id: number): Promise<Response> {
        return await fetch(`${baseUrl}/cards/${id}`, {
            method: 'PUT',
        })
    },  
    async destroy(id: number): Promise<Response> {
        return await fetch(`${baseUrl}/cards/${id}`, {
            method: 'DELETE',
        })
  }
  
    
    
}

export default ApiClient;
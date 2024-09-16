export class UserModel {

    id:number
    email: string
    name:string
    role:string

    constructor(dto:any) {
        this.id = dto.id,
        this.email = dto.email,
        this.name = dto.name,
        this.role = dto.role
    }

    toJSON() {
        return {
            id: this.id,
            email: this.email,
            name: this.name,
            role: this.role
        }
    }
}

// export class Tokens extends UserModel {
//     id:number
//     token: string

//     constructor(dto:any) {
//         super(dto)
//         this.id = dto.id,
//         this.token = dto.token
//     }
// }
export class UserModel {

    id:number
    name:string
    role:string

    constructor(dto:any) {
        this.id = dto.id,
        this.name = dto.name,
        this.role = dto.role
    }

    toJSON() {
        return {
            id: this.id,
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
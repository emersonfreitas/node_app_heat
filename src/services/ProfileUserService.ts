import prismaCliente from "../prisma"


class ProfileUserService {
  async execute(user_id) {
    const user = await prismaCliente.user.findFirst({
      where: {
        id: user_id
      }
    });

    return user;
  }
}

export { ProfileUserService }

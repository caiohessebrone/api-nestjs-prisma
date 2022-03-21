import { Prisma, Status } from '@prisma/client';
export class User implements Prisma.UserUncheckedCreateInput {
  id?: number;
  email: string;
  password: string;
  name: string;
  status: 'ON' | 'OFF' | 'ABSENT';
  photoPerfil: string;
  posts?: Prisma.PostUncheckedCreateNestedManyWithoutAuthorInput;
}

let contacts = [
  {
    id: 'ot40-4tg-uui-cs2',
    name: 'Roger',
    email: 'roger@gmail.com',
    phone: '12342412',
    category_id: 'werdwe'
  },
  {
    id: 'ah34-fgn5-ff-34k-hr',
    name: 'Roger',
    email: 'roger@gmail.com',
    phone: '12342412',
    category_id: 'werdwe'
  },
];

interface contactProps {
    id?: string,
    name: string,
    email: string,
    phone: string,
    category_id: string
}

class UserRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id: string){
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id)
    ));
  }

  findByEmail(email: string){
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.email === email)
    ));
  }

  delete(id: string){
    return new Promise((resolve) => resolve(
      contacts = contacts.filter((contact) => contact.id !== id)
    ));
  }

  create({ name , email, phone, category_id }: contactProps){
    return new Promise((resolve) => {
      const newUser = {
        id: 'kg85-md38=mdd4-tr',
        name,
        email,
        phone,
        category_id
      };

      contacts.push(newUser);
      resolve(newUser);
    });
  }

  update(id: string, { name , email, phone, category_id }: contactProps){
    return new Promise((resolve) => {
      const updatedUser = {
        id,
        name,
        email,
        phone,
        category_id
      };

      contacts = contacts.map((user) => (
        user.id === id ? updatedUser : user
      ));

      resolve(updatedUser);
    });
  }
}

export default new UserRepository();

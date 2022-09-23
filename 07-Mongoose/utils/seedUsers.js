
import userModel from '../database/user';
import connectDatabbase from '../database/index';

async function seedUser(count = 100) {

    await connectDatabbase();

    const users = []

    for (let i = 0; i < count; i++) {
        let user = {
            name: faker.name.fullName(),
            email: faker.internet.email(),
            age: crypto.randomInt(16, 55),
            image: faker.image.avatar(),
            verifiedEmail: Boolean(crypto.randomInt(0, 2)),
            balance: crypto.randomInt(0, 55000),
        }

        users.push(user);
    }

    await userModel.insertMany(users);
}

// seedUser(500)

const bcrypt = require('bcrypt')
const resolvers = {
    Query: {
        async user (root, { id }, { models }) {
            return models.User.findByPk(id);
        },
        async users (root, args, { models }) {
            return models.User.findAll();
        },
        async getMeasurement (root, { id }, { models }) {
            return models.Measurement.findByPk(id);
        },
        async getMeasurements (root, args, { models }) {
            return models.Measurement.findAll();
        }
    },

    Mutation: {
        async createUser (root, { firstName, lastName, email, password }, { models }) {
            return models.User.create({
                firstName,
                lastName,
                email,
                password: await bcrypt.hash(password, 8)
            });
        },

        async createMeasurement (root, { userId, weight }, { models }) {
            return models.Measurement.create({ userId, weight });
        },

        async deleteMeasurement (root, { id }, { models }) {
            return models.Measurement.destroy({
                where: {
                    id: id
                }
            });
        },

        async updateMeasurement (root, { id, weight }, { models }) {
            return models.Measurement.update({
                weight
            },
            {
                where: {
                    id: id
                }
            });
        }
    },

    User: {
        async measurements (user) {
            return user.getMeasurements();
        }
    },

    Measurement: {
        async user(measurement) {
            return measurement.getUser();
        }
    }

};

module.exports = resolvers;
import gql from 'graphql-tag';

export const getAllBMI = gql`{
    BMI{
        BMI_id
        BMI_foods
        BMI_BMI
        BMI_IMG
    }
}`;

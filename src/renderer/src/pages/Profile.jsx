import styles from '../styles/pages/Profile.module.css';
import { toast } from 'react-hot-toast'
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useOutletContext } from 'react-router-dom';
import Input from '../components/Input';
import Space from '../components/Space';
import { UPDATE_USER_MUTATION } from '../components/GraphQL/Queries';

const Profile = () => {
  const { user } = useOutletContext();
  const [firstName, setFirstName] = useState(user?.metadata?.firstName ?? '');
  const [lastName, setLastName] = useState(user?.metadata?.lastName ?? '');
  const [mutateUser, { loading: updatingProfile }] = useMutation(UPDATE_USER_MUTATION)


  const isFirstNameDirty = firstName !== user?.metadata?.firstName;
  const isLastNameDirty = lastName !== user?.metadata?.lastName;
  const isProfileFormDirty = isFirstNameDirty || isLastNameDirty;

  const updateUserProfile = async (e) => {
    e.preventDefault()

    try {
      await mutateUser({
        variables: {
          id: user.id,
          displayName: `${firstName} ${lastName}`.trim(),
          metadata: {
            firstName,
            lastName
          }
        }
      })
      toast.success('Updated successfully', { id: 'updateProfile' })
    } catch (error) {
      toast.error('Unable to update profile', { id: 'updateProfile' })
    }
  }

  return (
    <>
      <Space />

      <div className={styles.gridContainer}>
        <Helmet>
          <title>Profile - Nhost</title>
        </Helmet>

        <div className={styles.container}>
          <div className={styles.info}>
            <h2>Profile</h2>
            <p>Update your personal information.</p>
          </div>

          <div className="bg-white z-10 dark:bg-blur border rounded-lg">
            <form onSubmit={updateUserProfile} className={styles.form}>
              <div className={styles['form-fields']}>
                <div className={styles['input-group']}>
                  <Input
                    type="text"
                    label="First name"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    required
                  />
                  <Input
                    type="text"
                    label="Last name"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    required
                  />
                </div>
                <div className="bg-white dark:bg-blur roudned-lg">
                  <Input
                    type="email"
                    label="Email address"
                    value={user?.email}
                    readOnly
                  />
                </div>
              </div>
              <div className={styles['form-footer']}>
                <button
                  type="submit"
                  disabled={!isProfileFormDirty}
                  className={styles.button}
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

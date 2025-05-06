import PageLayout from "./PageLayout";

const ProtectedPage: React.FC = () => {
    return (
        <PageLayout>
            <h2>Protected Page</h2>
            <p>Keep it Secret, Keep it safe...</p>
        </PageLayout>
    )
}

export default ProtectedPage;
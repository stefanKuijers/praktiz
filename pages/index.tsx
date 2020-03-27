import { NextPage } from 'next';
import { useState } from 'react';
import useSWR from 'swr';
import { Box, Typography, Button } from '@material-ui/core';

import Layout from '../components/Layout';

const Page: NextPage = () => {
    
    return (
        <Layout>
            <Box pt={6} pb={6}>
                <Box component="section" mb={3} mt={3}>
                    <Typography variant="h3">
                        number
                    </Typography>
                </Box>

                <Box component="footer" mt={3} mb={3}>
                    <div>number</div>
                    x
                    <div>number</div>
                </Box>
            </Box>
        </Layout>
    );
};

export default Page;

import React from 'react';
import Link from 'next/link';
import { Box, Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbar = () => (
  <Flex p="2" borderBottom="1px" borderColor="gray.100">
    <Box fontSize="3xl" color="blue.400" fontWeight="bold">
      <Link href="/" paddingLeft="2">UcRealtor</Link>
    </Box>
    <Spacer  />
    <Box>
      <Menu>
        <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" color="red.400" />
        <MenuList>
          <Link href="/" passHref>
            <MenuItem gap="3"><FcHome /> Home</MenuItem>
          </Link>
          <Link href="/search" passHref>
            <MenuItem gap="3"><BsSearch /> Search</MenuItem>
          </Link>
          <Link href="/search?purpose=for-sale" passHref>
            <MenuItem gap="3"><FcAbout /> Buy Property</MenuItem>
          </Link>
          <Link href="/search?purpose=for-rent" passHref>
            <MenuItem gap="3"><FiKey /> Rent Property</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
)

export default Navbar
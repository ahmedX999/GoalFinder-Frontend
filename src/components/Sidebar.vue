 <template>

    <div class="transition-all duration-300 group bg-white z-50 h-screen w-[90px] hover:w-[250px] py-8 float-left fixed top-0 border-r border-border whitespace-nowrap overflow-auto scrollbar-hide">

        <div class=" pt-4 ">
            <nav class=" bg-white space-y-1" aria-label="Sidebar">
                <div class="py-5 flex  ">
                    <a href="#" class="m-auto block group-hover:hidden">
                        <img class="h-[46px]" src="@/src/img/logo_G1.png" alt="Description de l'image">
                    </a>
                    <a href="#" class="m-auto hidden group-hover:block">
                        <img class="h-[50px]" src="@/src/img/logo2_PFA_1.png" alt="Description de l'image">
                        
                    </a>
                </div>
                <div class="py-6">
                    <router-link to="/">
                        <div class="hover:bg-orange-50 border-orange-50/0  cursor-pointer border-l-8 hover:rounded-l-lg py-8 flex px-5 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-[#113d01] shrink-0">
                                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                            </svg>
                            <span class="pl-5 self-center hidden group-hover:inline">Dashboard </span>
                        </div>
                    </router-link>

                    <router-link to="/mycomplex">
                        <div class=" hover:bg-orange-50 border-orange-50/0 cursor-pointer border-l-8 hover:rounded-l-lg py-8 flex pl-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-[#113d01] shrink-0">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clip-rule="evenodd" />
</svg>


                            <span class="pl-5 self-center hidden group-hover:inline ">My Complex</span>
                        </div>
                    </router-link>



                    

                    <router-link to="/fields">
                        <div class=" hover:bg-orange-50 border-orange-50/0 border-l-8 cursor-pointer hover:rounded-l-lg py-8 flex pl-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-[#113d01] shrink-0">
                                <path d="M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z" />
                            </svg>
                            <span class="pl-5 self-center hidden group-hover:inline">My Fields</span>
                        </div>
                    </router-link>
                    <router-link to="/reservation">
                        <div class=" hover:bg-orange-50 border-orange-50/0 border-l-8 cursor-pointer hover:rounded-l-lg py-8 flex pl-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-[#113d01] shrink-0">
                                <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                                <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
                            </svg>


                            <span class="pl-5 self-center hidden group-hover:inline">Réservations</span>
                        </div>
                    </router-link>
                    <router-link to="/users">
                        <div class=" hover:bg-orange-50 border-orange-50/0 border-l-8 cursor-pointer hover:rounded-l-lg py-8 flex pl-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-[#113d01] shrink-0">
                                <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                            </svg>

                            <span class="pl-5 self-center hidden group-hover:inline">Users</span>
                        </div>
                    </router-link>
                    
                    
                    <router-link to="/login">
                        <div class=" hover:bg-orange-50 border-orange-50/0 cursor-pointer border-l-8 hover:rounded-l-lg py-8 flex pl-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-[#113d01] shrink-0">
  <path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z" clip-rule="evenodd" />
</svg>
                   <span class="pl-5 self-center hidden group-hover:inline">Sign out</span>
                        </div>
                    </router-link>
                </div>

            </nav>
        </div>

    </div>

</template>
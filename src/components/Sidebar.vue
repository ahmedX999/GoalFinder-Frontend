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
                    <router-link to="/fields">
                        <div class=" hover:bg-orange-50 border-orange-50/0 border-l-8 cursor-pointer hover:rounded-l-lg py-8 flex pl-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-[#113d01] shrink-0">
                                <path d="M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z" />
                            </svg>
                            <span class="pl-5 self-center hidden group-hover:inline">Terrains</span>
                        </div>
                    </router-link>
                    <router-link to="/">
                        <div class=" hover:bg-orange-50 border-orange-50/0 border-l-8 cursor-pointer hover:rounded-l-lg py-8 flex pl-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-[#113d01] shrink-0">
                                <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                            </svg>

                            <span class="pl-5 self-center hidden group-hover:inline">Accounts</span>
                        </div>
                    </router-link>
                    <router-link to="/">
                        <div class=" hover:bg-orange-50 border-orange-50/0 cursor-pointer border-l-8 hover:rounded-l-lg py-8 flex pl-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-[#113d01] shrink-0">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                            </svg>

                            <span class="pl-5 self-center hidden group-hover:inline ">Parks</span>
                        </div>
                    </router-link>
                    
                    <router-link to="/">
                        <div class=" hover:bg-orange-50 border-orange-50/0 cursor-pointer border-l-8 hover:rounded-l-lg py-8 flex pl-5">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-8 h-8 text-[#113d01] shrink-0" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 447.674 447.674"  >
<g>
	<g>
		<path d="M182.725,379.151c-0.572-1.522-0.769-2.816-0.575-3.863c0.193-1.04-0.472-1.902-1.997-2.566    c-1.525-0.664-2.286-1.191-2.286-1.567c0-0.38-1.093-0.667-3.284-0.855c-2.19-0.191-3.283-0.288-3.283-0.288h-3.71h-3.14H82.224    c-12.562,0-23.317-4.469-32.264-13.421c-8.945-8.946-13.417-19.698-13.417-32.258V123.335c0-12.562,4.471-23.313,13.417-32.259    c8.947-8.947,19.702-13.422,32.264-13.422h91.361c2.475,0,4.421-0.614,5.852-1.854c1.425-1.237,2.375-3.094,2.853-5.568    c0.476-2.474,0.763-4.708,0.859-6.707c0.094-1.997,0.048-4.521-0.144-7.566c-0.189-3.044-0.284-4.947-0.284-5.712    c0-2.474-0.905-4.611-2.712-6.423c-1.809-1.804-3.949-2.709-6.423-2.709H82.224c-22.648,0-42.016,8.042-58.101,24.125    C8.042,81.323,0,100.688,0,123.338v200.994c0,22.648,8.042,42.018,24.123,58.095c16.085,16.091,35.453,24.133,58.101,24.133    h91.365c2.475,0,4.422-0.622,5.852-1.854c1.425-1.239,2.375-3.094,2.853-5.571c0.476-2.471,0.763-4.716,0.859-6.707    c0.094-1.999,0.048-4.518-0.144-7.563C182.818,381.817,182.725,379.915,182.725,379.151z"/>
		<path d="M442.249,210.989L286.935,55.67c-3.614-3.612-7.898-5.424-12.847-5.424c-4.949,0-9.233,1.812-12.851,5.424    c-3.617,3.617-5.424,7.904-5.424,12.85v82.226H127.907c-4.952,0-9.233,1.812-12.85,5.424c-3.617,3.617-5.424,7.901-5.424,12.85    v109.636c0,4.948,1.807,9.232,5.424,12.847c3.621,3.61,7.901,5.427,12.85,5.427h127.907v82.225c0,4.945,1.807,9.233,5.424,12.847    c3.617,3.617,7.901,5.428,12.851,5.428c4.948,0,9.232-1.811,12.847-5.428L442.249,236.69c3.617-3.62,5.425-7.898,5.425-12.848    C447.674,218.894,445.866,214.606,442.249,210.989z"/>
	</g>
</g>

</svg>
                            <span class="pl-5 self-center hidden group-hover:inline">Sign out</span>
                        </div>
                    </router-link>
                </div>

            </nav>
        </div>

    </div>

</template>
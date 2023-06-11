<template>


    <div class="adCates">
        <div class="adcate-tools">
            <el-button type="warning" @click="addFlag=true">添加</el-button>
            <el-button type="warning" @click="FrontendMenusByColums=true">通过字段查询前端菜单</el-button>
            <el-button type="warning" @click="FrontendMenuByUserId=true">通过用户id查询前端菜单</el-button>
            <el-button type="warning" @click="MenusByPid=true">通过父id查询前端菜单</el-button>

        </div>
        <el-table :data="frontendMenuList" style="width: 100%">
            <el-table-column fixed prop="id" label="#" width="50" />
            <el-table-column prop="description" label="描述" />
            <el-table-column prop="hasChildren" label="是否有子菜单" />
            <el-table-column prop="menuName" label="前端菜单名称"/>
            <el-table-column prop="menuSort" label="排序" />
            <el-table-column prop="menuUrl" label="前端菜单访问HTML地址"/>
            <el-table-column prop="pid" label="父ID	"/>

            <el-table-column fixed="right" label="操作" width="120">
                <template #default="scope">
                    <el-button link type="primary" size="small" @click="edit(scope.row)">更新</el-button>
                    <el-button link type="primary" size="small" @click="del(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
    <el-dialog v-model="addFlag" title="前端菜单编辑">
        <el-form :model="frontendMenuList">
            <el-form-item label="描述" :label-width="formLabelWidth">
                <el-input v-model="frontendMenu.description" autocomplete="off" />
            </el-form-item>
            <el-form-item label="是否有子菜单" :label-width="formLabelWidth">
                <el-input v-model="frontendMenu.hasChildren" autocomplete="off" />
            </el-form-item>
            <el-form-item label="前端菜单名称" :label-width="formLabelWidth">
                <el-input v-model="frontendMenu.menuName" autocomplete="off" />
            </el-form-item>
            <el-form-item label="排序" :label-width="formLabelWidth">
                <el-input v-model="frontendMenu.menuSort" autocomplete="off" />
            </el-form-item>
            <el-form-item label="前端菜单访问HTML地址" :label-width="formLabelWidth">
                <el-input v-model="frontendMenu.menuUrl" autocomplete="off" />
            </el-form-item>
            <el-form-item label="父ID" :label-width="formLabelWidth">
                <el-input v-model="frontendMenu.pid" autocomplete="off" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="addFlag = false">Cancel</el-button>
                <el-button type="primary" @click="save()">
                    保存
                </el-button>
            </span>
        </template>
    </el-dialog>
    <el-dialog v-model="FrontendMenusByColums" title="请输入查询的字段名称">
        <el-form>
            <el-form-item label="字段" :label-width="formLabelWidth">
                <el-input v-model="this.colums" autocomplete="off" />
            </el-form-item>

        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="FrontendMenusByColums = false">Cancel</el-button>
                <el-button type="primary" @click="getFrontendMenusByColums(this.colums)">
                    保存
                </el-button>
            </span>
        </template>
    </el-dialog>



    <el-dialog v-model="FrontendMenuByUserId" title="请输入id">
        <el-form>
            <el-form-item label="用户id" :label-width="formLabelWidth">
                <el-input v-model="this.id" autocomplete="off" />
            </el-form-item>

        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="FrontendMenuByUserId = false">Cancel</el-button>
                <el-button type="primary" @click="getFrontendMenuByUserId(this.id)">
                    保存
                </el-button>
            </span>
        </template>
    </el-dialog>

    <el-dialog v-model="MenusByPid" title="请输入父id">
        <el-form>
            <el-form-item label="父id" :label-width="formLabelWidth">
                <el-input v-model="this.pid" autocomplete="off" />
            </el-form-item>

        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="MenusByPid = false">Cancel</el-button>
                <el-button type="primary" @click="getMenusByPid(this.pid)">
                    保存
                </el-button>
            </span>
        </template>
    </el-dialog>


</template>

<script>
import {defineComponent } from "vue"
import {frontendMenuAdd,frontendMenuDelId,getFrontendMenusByColums,getFrontendMenuByUserId,getMenusByPid,getAll,frontendMenuEdit} from "../../http/frontendMenu"





export default defineComponent({
    data() {
        return {
            FrontendMenusByColums:false,
            colums:null,
            FrontendMenuByUserId:false,
            id:null,
            MenusByPid:false,
            pid:null,
            addFlag: false,
            frontendMenuList:[],
            frontendMenu:{
            "description": "",
            "id": 0,
            "hasChildren": "",
            "menuName": '',
            "menuSort": '',
            "menuUrl" : '',
            "pid" : ''
            },
            formLabelWidth: 80
        }
    },
    created(){
        this.getList()
    },
    methods: {

        getFrontendMenusByColums(colums){
            var arr =  new Array;
            arr.push(colums)
            const params= {
              colums:arr  
            }
            getFrontendMenusByColums(params).then(res=>{
                console.log(res)
                this.frontendMenuList=res.data.menus
            })
        },
        getFrontendMenuByUserId(id){
            console.log(id);
            const params= {
              id:id  
            }
            getFrontendMenuByUserId(params).then(res =>{
                console.log(res);
                this.frontendMenuList=res.data
            })
        },
        getMenusByPid(pid){
            const params= {
              pid:pid  
            }
            getMenusByPid(params).then(res=>{
                this.frontendMenuList=res.data.menus
                console.log(res.data.menus)
            })
            this.getList()
            this.MenusByPid=false
            
        },
        getList(){
            getAll().then(res=>{
            this.frontendMenuList=res.data.communities
        })
        },

        del(id) {
            const params = {
                id: id
            }
            frontendMenuDelId(params).then(res => {
                if (res.success) {
                    this.getList()

                }
                else {
                    console.log(res.msg)
                    return false
                }


            }).catch(err => {

            })
        },
        add(){
            this.frontendMenu={
            "description": "",
            "id": 0,
            "hasChildren": "",
            "menuName": '',
            "menuSort": '',
            "menuUrl" : '',
            "pid" : ''
            }
            this.addFlag=true
        },
        edit(row){
            this.addFlag=true
            this.frontendMenu.id=row.id;   
            this.frontendMenu.menuSort=row.menuSort;   
            this.frontendMenu.menuUrl=row.menuUrl;   
            this.frontendMenu.menuName=row.menuName;   
            this.frontendMenu.pid=row.pid;   
            this.frontendMenu.description=row.description;   
            this.frontendMenu.hasChildren=row.hasChildren;   
                                                                    
        },
        save() {
            const frontendMenu = this.frontendMenu;
            if (frontendMenu.id == 0) {
                frontendMenuAdd(frontendMenu).then(res => {
                    if (res.success) {
                        //刷新页面
                        this.addFlag = false;
                        this.getList()
                        ElMessage(res.msg)
                    }
                    else {
                        ElMessage(res.msg)
                        return false
                    }
                }).catch(err => {
                    ElMessage('网络错误联系管理员')
                })
            }
            else{
                frontendMenuEdit(frontendMenu).then(res => {
                    if (res.success) {
                        //刷新页面
                        this.addFlag = false;
                        this.getList()
                        ElMessage(res.msg)
                    }
                    else {
                        ElMessage(res.msg)
                        return false
                    }
                }).catch(err => {
                    ElMessage('网络错误联系管理员')
                })
            }

        }



    }

});
</script>

<style lang="scss" scoped></style>

  


<?php

namespace App\Policies;

use App\Models\Industry;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class IndustryPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Industry  $industry
     * @return mixed
     */
    public function view(User $user, Industry $industry)
    {
        //
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        //
    }

    public function edit(User $user, Industry $industry)
    {
        if($user->isViewOnlyAdmin()){
            return false;
        }
        return true;
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Industry  $industry
     * @return mixed
     */
    public function update(User $user, Industry $industry)
    {
        if($user->isViewOnlyAdmin()){
            return false;
        }
        return true;

    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Industry  $industry
     * @return mixed
     */
    public function delete(User $user, Industry $industry)
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Industry  $industry
     * @return mixed
     */
    public function restore(User $user, Industry $industry)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Industry  $industry
     * @return mixed
     */
    public function forceDelete(User $user, Industry $industry)
    {
        //
    }
}

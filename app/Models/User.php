<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    const SUPER_ADMIN_TYPE = 'super_admin';
    const ADMIN_TYPE = 'Admin';
    const VIEW_ONLY_ADMIN_TYPE = 'View-Only Admin';
    const DATA_ANALYSIS_TYPE = 'Data Analysis';
    const CUSTOMER_SUPPORT = 'Customer Support';
    const INVESTOR_TYPE = 'Investor';
    const COMPANY_TYPE = 'Company';
    const DEFAULT_TYPE = 'Default';

    protected $fillable = [
        'name',
        'first_name',
        'last_name',
        'email',
        'role',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    public function isSuperAdmin()
    {
        return $this->role === self::SUPER_ADMIN_TYPE;
    }

    public function isAdmin()
    {
        return $this->role === self::ADMIN_TYPE;
    }

    public function isViewOnlyAdmin()
    {
        return $this->role === self::VIEW_ONLY_ADMIN_TYPE;
    }

    public function isDataAnalysis()
    {
        return $this->role === self::DATA_ANALYSIS_TYPE;
    }


    public function isCustomerSupport()
    {
        return $this->role === self::CUSTOMER_SUPPORT;
    }

    public function isAdminOrSuperAdmin()
    {
        return ($this->role === self::SUPER_ADMIN_TYPE) || ($this->role === self::ADMIN_TYPE);
    }

    public function isAdminOrSuperAdminOrDataAnalysis()
    {
        return ($this->role === self::SUPER_ADMIN_TYPE) || ($this->role === self::ADMIN_TYPE) || ($this->role === self::DATA_ANALYSIS_TYPE);
    }

    public function isAdminOrSuperAdminOrViewOnlyAdmin()
    {
        return ($this->role === self::SUPER_ADMIN_TYPE) || ($this->role === self::ADMIN_TYPE) || ($this->role === self::VIEW_ONLY_ADMIN_TYPE);
    }

    public function isAdminOrSuperAdminOrCustomerSupport()
    {
        return ($this->role === self::SUPER_ADMIN_TYPE) || ($this->role === self::ADMIN_TYPE) || ($this->role === self::CUSTOMER_SUPPORT);
    }

    public function isAdminOrSuperAdminOrDataAnalysisOrCustomerSupport()
    {
        return ($this->role === self::SUPER_ADMIN_TYPE) || ($this->role === self::ADMIN_TYPE) || ($this->role === self::CUSTOMER_SUPPORT) || ($this->role === self::DATA_ANALYSIS_TYPE);
    }

    public function IsSuperAdminOrAdminOrViewOnlyAdminOrCustomerSupport()
    {
        return ($this->role === self::SUPER_ADMIN_TYPE) || ($this->role === self::ADMIN_TYPE) ||
            ($this->role === self::VIEW_ONLY_ADMIN_TYPE) || ($this->role === self::CUSTOMER_SUPPORT);
    }

    public function isAdministrator()
    {
        return ($this->role === self::SUPER_ADMIN_TYPE) || ($this->role === self::ADMIN_TYPE) ||
            ($this->role === self::VIEW_ONLY_ADMIN_TYPE) || ($this->role === self::DATA_ANALYSIS_TYPE) ||
            ($this->role === self::CUSTOMER_SUPPORT);
    }

    public function isInvestor()
    {
        return $this->role === self::INVESTOR_TYPE;
    }

    public function isCompany()
    {
        return $this->role === self::COMPANY_TYPE;
    }

    public function scopeAdmin($query)
    {
        return $query->whereRole(self::ADMIN_TYPE);
    }

    public function scopeViewOnlyAdmin($query)
    {
        return $query->whereRole(self::VIEW_ONLY_ADMIN_TYPE);
    }

    public function scopeInvestor($query)
    {
        return $query->whereRole(self::INVESTOR_TYPE);
    }

    public function scopeCompany($query)
    {
        return $query->whereRole(self::COMPANY_TYPE);
    }

    public function company()
    {
        return $this->belongsTo(Company::class, 'company_id', 'id');
    }

    public function nodeSuggestion()
    {
        return $this->hasMany(Suggestion::class, 'user_id', 'id');
    }

    public function mediaSubjectSuggestion()
    {
        return $this->hasMany(MediaSubjectSuggestion::class, 'created_by', 'id');
    }

    public function loginLog()
    {
        return $this->hasMany(UserLog::class, 'user_id', 'id');
    }

    public function sendPasswordResetNotification($token)
    {
        $role = $this->whereEmail(request()->email)->first()->role;
        if(($role == self::SUPER_ADMIN_TYPE) || ($role == self::ADMIN_TYPE)  ||
            ($role == self::VIEW_ONLY_ADMIN_TYPE) || ($role == self::DATA_ANALYSIS_TYPE) || ($role == self::CUSTOMER_SUPPORT))
        {
            $this->notify(new \App\Notifications\AdminResetPasswordNotification($token));
        }
        elseif($role == self::COMPANY_TYPE)
        {
            $this->notify(new \App\Notifications\CompanyResetPasswordNotification($token));
        }
    }

    public function scopeGetAssoc($query)
    {
        return $query->pluck('name', 'id');
    }
    public function scopeActive($query)
    {
        return $query->whereStatus(1);
    }
}

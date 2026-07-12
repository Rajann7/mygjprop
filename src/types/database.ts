export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          extensions?: Json
          operationName?: string
          query?: string
          variables?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      account_recovery_cases: {
        Row: {
          correlation_id: string
          created_at: string
          decided_at: string | null
          handled_by: string | null
          id: string
          reason: string
          status: Database["public"]["Enums"]["recovery_status"]
          user_id: string
        }
        Insert: {
          correlation_id?: string
          created_at?: string
          decided_at?: string | null
          handled_by?: string | null
          id?: string
          reason: string
          status?: Database["public"]["Enums"]["recovery_status"]
          user_id: string
        }
        Update: {
          correlation_id?: string
          created_at?: string
          decided_at?: string | null
          handled_by?: string | null
          id?: string
          reason?: string
          status?: Database["public"]["Enums"]["recovery_status"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "account_recovery_cases_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "account_recovery_cases_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      account_status_history: {
        Row: {
          actor_id: string | null
          correlation_id: string
          created_at: string
          from_status: Database["public"]["Enums"]["account_status"] | null
          id: string
          reason: string | null
          to_status: Database["public"]["Enums"]["account_status"]
          user_id: string
        }
        Insert: {
          actor_id?: string | null
          correlation_id?: string
          created_at?: string
          from_status?: Database["public"]["Enums"]["account_status"] | null
          id?: string
          reason?: string | null
          to_status: Database["public"]["Enums"]["account_status"]
          user_id: string
        }
        Update: {
          actor_id?: string | null
          correlation_id?: string
          created_at?: string
          from_status?: Database["public"]["Enums"]["account_status"] | null
          id?: string
          reason?: string | null
          to_status?: Database["public"]["Enums"]["account_status"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "account_status_history_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "account_status_history_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      audit_logs: {
        Row: {
          action: string
          actor_id: string | null
          actor_role: string
          after_state: Json | null
          before_state: Json | null
          correlation_id: string
          created_at: string
          entity_id: string | null
          entity_kind: string
          id: string
          reason: string | null
        }
        Insert: {
          action: string
          actor_id?: string | null
          actor_role: string
          after_state?: Json | null
          before_state?: Json | null
          correlation_id?: string
          created_at?: string
          entity_id?: string | null
          entity_kind: string
          id?: string
          reason?: string | null
        }
        Update: {
          action?: string
          actor_id?: string | null
          actor_role?: string
          after_state?: Json | null
          before_state?: Json | null
          correlation_id?: string
          created_at?: string
          entity_id?: string | null
          entity_kind?: string
          id?: string
          reason?: string | null
        }
        Relationships: []
      }
      background_job_runs: {
        Row: {
          detail: Json
          finished_at: string | null
          id: string
          job_name: string
          started_at: string
          status: string
        }
        Insert: {
          detail?: Json
          finished_at?: string | null
          id?: string
          job_name: string
          started_at?: string
          status: string
        }
        Update: {
          detail?: Json
          finished_at?: string | null
          id?: string
          job_name?: string
          started_at?: string
          status?: string
        }
        Relationships: []
      }
      blog_articles: {
        Row: {
          author_id: string | null
          body: Json
          created_at: string
          excerpt: string | null
          id: string
          publication: Database["public"]["Enums"]["publication_status"]
          published_at: string | null
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          author_id?: string | null
          body?: Json
          created_at?: string
          excerpt?: string | null
          id?: string
          publication?: Database["public"]["Enums"]["publication_status"]
          published_at?: string | null
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          author_id?: string | null
          body?: Json
          created_at?: string
          excerpt?: string | null
          id?: string
          publication?: Database["public"]["Enums"]["publication_status"]
          published_at?: string | null
          slug?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      broker_profiles: {
        Row: {
          about: string | null
          business_name: string
          created_at: string
          public_slug: string | null
          rera_number: string | null
          service_city_ids: string[]
          updated_at: string
          user_id: string
        }
        Insert: {
          about?: string | null
          business_name?: string
          created_at?: string
          public_slug?: string | null
          rera_number?: string | null
          service_city_ids?: string[]
          updated_at?: string
          user_id: string
        }
        Update: {
          about?: string | null
          business_name?: string
          created_at?: string
          public_slug?: string | null
          rera_number?: string | null
          service_city_ids?: string[]
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "broker_profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "broker_profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      bug_entity_links: {
        Row: {
          bug_id: string
          entity_id: string
          entity_kind: string
        }
        Insert: {
          bug_id: string
          entity_id: string
          entity_kind: string
        }
        Update: {
          bug_id?: string
          entity_id?: string
          entity_kind?: string
        }
        Relationships: [
          {
            foreignKeyName: "bug_entity_links_bug_id_fkey"
            columns: ["bug_id"]
            isOneToOne: false
            referencedRelation: "bugs"
            referencedColumns: ["id"]
          },
        ]
      }
      bug_events: {
        Row: {
          actor_id: string | null
          bug_id: string
          created_at: string
          detail: Json
          id: string
          kind: string
        }
        Insert: {
          actor_id?: string | null
          bug_id: string
          created_at?: string
          detail?: Json
          id?: string
          kind: string
        }
        Update: {
          actor_id?: string | null
          bug_id?: string
          created_at?: string
          detail?: Json
          id?: string
          kind?: string
        }
        Relationships: [
          {
            foreignKeyName: "bug_events_bug_id_fkey"
            columns: ["bug_id"]
            isOneToOne: false
            referencedRelation: "bugs"
            referencedColumns: ["id"]
          },
        ]
      }
      bugs: {
        Row: {
          created_at: string
          detail: string | null
          id: string
          reporter_id: string | null
          reporter_kind: string
          severity: string | null
          status: Database["public"]["Enums"]["bug_status"]
          summary: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          detail?: string | null
          id?: string
          reporter_id?: string | null
          reporter_kind: string
          severity?: string | null
          status?: Database["public"]["Enums"]["bug_status"]
          summary: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          detail?: string | null
          id?: string
          reporter_id?: string | null
          reporter_kind?: string
          severity?: string | null
          status?: Database["public"]["Enums"]["bug_status"]
          summary?: string
          updated_at?: string
        }
        Relationships: []
      }
      builder_profiles: {
        Row: {
          about: string | null
          company_name: string
          created_at: string
          established_year: number | null
          public_slug: string | null
          rera_number: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          about?: string | null
          company_name?: string
          created_at?: string
          established_year?: number | null
          public_slug?: string | null
          rera_number?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          about?: string | null
          company_name?: string
          created_at?: string
          established_year?: number | null
          public_slug?: string | null
          rera_number?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "builder_profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "builder_profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      cms_page_versions: {
        Row: {
          author_id: string | null
          body: Json
          created_at: string
          id: string
          is_current: boolean
          page_id: string
          version: number
        }
        Insert: {
          author_id?: string | null
          body?: Json
          created_at?: string
          id?: string
          is_current?: boolean
          page_id: string
          version: number
        }
        Update: {
          author_id?: string | null
          body?: Json
          created_at?: string
          id?: string
          is_current?: boolean
          page_id?: string
          version?: number
        }
        Relationships: [
          {
            foreignKeyName: "cms_page_versions_page_id_fkey"
            columns: ["page_id"]
            isOneToOne: false
            referencedRelation: "cms_pages"
            referencedColumns: ["id"]
          },
        ]
      }
      cms_pages: {
        Row: {
          created_at: string
          id: string
          publication: Database["public"]["Enums"]["publication_status"]
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          publication?: Database["public"]["Enums"]["publication_status"]
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          publication?: Database["public"]["Enums"]["publication_status"]
          slug?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      consent_records: {
        Row: {
          consent_key: string
          created_at: string
          granted: boolean
          id: string
          source: string
          user_id: string
        }
        Insert: {
          consent_key: string
          created_at?: string
          granted: boolean
          id?: string
          source?: string
          user_id: string
        }
        Update: {
          consent_key?: string
          created_at?: string
          granted?: boolean
          id?: string
          source?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "consent_records_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "consent_records_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      credit_notes: {
        Row: {
          amount_minor: number
          credit_note_number: string
          id: string
          invoice_id: string
          issued_at: string
          reason: string
        }
        Insert: {
          amount_minor: number
          credit_note_number: string
          id?: string
          invoice_id: string
          issued_at?: string
          reason: string
        }
        Update: {
          amount_minor?: number
          credit_note_number?: string
          id?: string
          invoice_id?: string
          issued_at?: string
          reason?: string
        }
        Relationships: [
          {
            foreignKeyName: "credit_notes_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
        ]
      }
      direct_inquiries: {
        Row: {
          consent: boolean
          correlation_id: string
          created_at: string
          id: string
          idempotency_key: string | null
          message: string
          project_id: string | null
          property_id: string | null
          requirement_id: string | null
          sender_user_id: string
          unit_id: string | null
        }
        Insert: {
          consent: boolean
          correlation_id?: string
          created_at?: string
          id?: string
          idempotency_key?: string | null
          message: string
          project_id?: string | null
          property_id?: string | null
          requirement_id?: string | null
          sender_user_id: string
          unit_id?: string | null
        }
        Update: {
          consent?: boolean
          correlation_id?: string
          created_at?: string
          id?: string
          idempotency_key?: string | null
          message?: string
          project_id?: string | null
          property_id?: string | null
          requirement_id?: string | null
          sender_user_id?: string
          unit_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "direct_inquiries_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "direct_inquiries_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "public_projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "direct_inquiries_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "direct_inquiries_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "public_properties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "direct_inquiries_requirement_id_fkey"
            columns: ["requirement_id"]
            isOneToOne: false
            referencedRelation: "requirements"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "direct_inquiries_sender_user_id_fkey"
            columns: ["sender_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "direct_inquiries_sender_user_id_fkey"
            columns: ["sender_user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "direct_inquiries_unit_id_fkey"
            columns: ["unit_id"]
            isOneToOne: false
            referencedRelation: "project_units"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "direct_inquiries_unit_id_fkey"
            columns: ["unit_id"]
            isOneToOne: false
            referencedRelation: "public_units"
            referencedColumns: ["id"]
          },
        ]
      }
      email_change_requests: {
        Row: {
          created_at: string
          id: string
          new_email: string
          status: Database["public"]["Enums"]["moderation_status"]
          user_id: string
          verified_at: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          new_email: string
          status?: Database["public"]["Enums"]["moderation_status"]
          user_id: string
          verified_at?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          new_email?: string
          status?: Database["public"]["Enums"]["moderation_status"]
          user_id?: string
          verified_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "email_change_requests_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "email_change_requests_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      export_jobs: {
        Row: {
          completed_at: string | null
          created_at: string
          file_path: string | null
          id: string
          reason: string
          requested_by: string
          scope: string
          status: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          file_path?: string | null
          id?: string
          reason: string
          requested_by: string
          scope: string
          status: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          file_path?: string | null
          id?: string
          reason?: string
          requested_by?: string
          scope?: string
          status?: string
        }
        Relationships: []
      }
      feature_flags: {
        Row: {
          description: string
          enabled: boolean
          flag_key: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          description?: string
          enabled?: boolean
          flag_key: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          description?: string
          enabled?: boolean
          flag_key?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      invoice_items: {
        Row: {
          description: string
          id: string
          invoice_id: string
          quantity: number
          total_minor: number
          unit_minor: number
        }
        Insert: {
          description: string
          id?: string
          invoice_id: string
          quantity?: number
          total_minor: number
          unit_minor: number
        }
        Update: {
          description?: string
          id?: string
          invoice_id?: string
          quantity?: number
          total_minor?: number
          unit_minor?: number
        }
        Relationships: [
          {
            foreignKeyName: "invoice_items_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
        ]
      }
      invoices: {
        Row: {
          currency: string
          file_path: string | null
          id: string
          invoice_number: string
          issued_at: string
          order_id: string | null
          tax_minor: number
          total_minor: number
          user_id: string
        }
        Insert: {
          currency?: string
          file_path?: string | null
          id?: string
          invoice_number: string
          issued_at?: string
          order_id?: string | null
          tax_minor?: number
          total_minor: number
          user_id: string
        }
        Update: {
          currency?: string
          file_path?: string | null
          id?: string
          invoice_number?: string
          issued_at?: string
          order_id?: string | null
          tax_minor?: number
          total_minor?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "invoices_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "payment_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "invoices_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      lead_activity_events: {
        Row: {
          actor_id: string | null
          correlation_id: string
          created_at: string
          id: string
          kind: string
          lead_id: string
          payload: Json
        }
        Insert: {
          actor_id?: string | null
          correlation_id?: string
          created_at?: string
          id?: string
          kind: string
          lead_id: string
          payload?: Json
        }
        Update: {
          actor_id?: string | null
          correlation_id?: string
          created_at?: string
          id?: string
          kind?: string
          lead_id?: string
          payload?: Json
        }
        Relationships: [
          {
            foreignKeyName: "lead_activity_events_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      lead_follow_ups: {
        Row: {
          completed_at: string | null
          created_at: string
          due_at: string
          id: string
          lead_id: string
          note: string | null
          owner_user_id: string
          status: Database["public"]["Enums"]["follow_up_status"]
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          due_at: string
          id?: string
          lead_id: string
          note?: string | null
          owner_user_id: string
          status?: Database["public"]["Enums"]["follow_up_status"]
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          due_at?: string
          id?: string
          lead_id?: string
          note?: string | null
          owner_user_id?: string
          status?: Database["public"]["Enums"]["follow_up_status"]
        }
        Relationships: [
          {
            foreignKeyName: "lead_follow_ups_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lead_follow_ups_owner_user_id_fkey"
            columns: ["owner_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "lead_follow_ups_owner_user_id_fkey"
            columns: ["owner_user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      lead_message_reads: {
        Row: {
          message_id: string
          read_at: string
          user_id: string
        }
        Insert: {
          message_id: string
          read_at?: string
          user_id: string
        }
        Update: {
          message_id?: string
          read_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "lead_message_reads_message_id_fkey"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "lead_messages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lead_message_reads_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "lead_message_reads_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      lead_messages: {
        Row: {
          body: string
          created_at: string
          id: string
          lead_id: string
          sender_user_id: string
          status: Database["public"]["Enums"]["message_status"]
        }
        Insert: {
          body: string
          created_at?: string
          id?: string
          lead_id: string
          sender_user_id: string
          status?: Database["public"]["Enums"]["message_status"]
        }
        Update: {
          body?: string
          created_at?: string
          id?: string
          lead_id?: string
          sender_user_id?: string
          status?: Database["public"]["Enums"]["message_status"]
        }
        Relationships: [
          {
            foreignKeyName: "lead_messages_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lead_messages_sender_user_id_fkey"
            columns: ["sender_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "lead_messages_sender_user_id_fkey"
            columns: ["sender_user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      lead_notes: {
        Row: {
          author_user_id: string
          body: string
          created_at: string
          id: string
          lead_id: string
        }
        Insert: {
          author_user_id: string
          body: string
          created_at?: string
          id?: string
          lead_id: string
        }
        Update: {
          author_user_id?: string
          body?: string
          created_at?: string
          id?: string
          lead_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "lead_notes_author_user_id_fkey"
            columns: ["author_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "lead_notes_author_user_id_fkey"
            columns: ["author_user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "lead_notes_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      lead_participants: {
        Row: {
          added_at: string
          lead_id: string
          participant_role: string
          user_id: string
        }
        Insert: {
          added_at?: string
          lead_id: string
          participant_role: string
          user_id: string
        }
        Update: {
          added_at?: string
          lead_id?: string
          participant_role?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "lead_participants_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lead_participants_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "lead_participants_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      lead_reports: {
        Row: {
          created_at: string
          id: string
          lead_id: string
          reason: string
          reporter_user_id: string
          status: Database["public"]["Enums"]["report_status"]
        }
        Insert: {
          created_at?: string
          id?: string
          lead_id: string
          reason: string
          reporter_user_id: string
          status?: Database["public"]["Enums"]["report_status"]
        }
        Update: {
          created_at?: string
          id?: string
          lead_id?: string
          reason?: string
          reporter_user_id?: string
          status?: Database["public"]["Enums"]["report_status"]
        }
        Relationships: [
          {
            foreignKeyName: "lead_reports_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lead_reports_reporter_user_id_fkey"
            columns: ["reporter_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "lead_reports_reporter_user_id_fkey"
            columns: ["reporter_user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      lead_status_history: {
        Row: {
          actor_id: string | null
          correlation_id: string
          created_at: string
          from_status: Database["public"]["Enums"]["lead_status"] | null
          id: string
          lead_id: string
          reason: string | null
          to_status: Database["public"]["Enums"]["lead_status"]
        }
        Insert: {
          actor_id?: string | null
          correlation_id?: string
          created_at?: string
          from_status?: Database["public"]["Enums"]["lead_status"] | null
          id?: string
          lead_id: string
          reason?: string | null
          to_status: Database["public"]["Enums"]["lead_status"]
        }
        Update: {
          actor_id?: string | null
          correlation_id?: string
          created_at?: string
          from_status?: Database["public"]["Enums"]["lead_status"] | null
          id?: string
          lead_id?: string
          reason?: string | null
          to_status?: Database["public"]["Enums"]["lead_status"]
        }
        Relationships: [
          {
            foreignKeyName: "lead_status_history_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      leads: {
        Row: {
          created_at: string
          deleted_at: string | null
          id: string
          inquiry_id: string | null
          last_activity_at: string
          owner_user_id: string
          priority: Database["public"]["Enums"]["lead_priority"]
          project_id: string | null
          property_id: string | null
          requirement_id: string | null
          sender_user_id: string
          source_kind: Database["public"]["Enums"]["lead_source_kind"]
          status: Database["public"]["Enums"]["lead_status"]
          unit_id: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          inquiry_id?: string | null
          last_activity_at?: string
          owner_user_id: string
          priority?: Database["public"]["Enums"]["lead_priority"]
          project_id?: string | null
          property_id?: string | null
          requirement_id?: string | null
          sender_user_id: string
          source_kind: Database["public"]["Enums"]["lead_source_kind"]
          status?: Database["public"]["Enums"]["lead_status"]
          unit_id?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          inquiry_id?: string | null
          last_activity_at?: string
          owner_user_id?: string
          priority?: Database["public"]["Enums"]["lead_priority"]
          project_id?: string | null
          property_id?: string | null
          requirement_id?: string | null
          sender_user_id?: string
          source_kind?: Database["public"]["Enums"]["lead_source_kind"]
          status?: Database["public"]["Enums"]["lead_status"]
          unit_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "leads_inquiry_id_fkey"
            columns: ["inquiry_id"]
            isOneToOne: false
            referencedRelation: "direct_inquiries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leads_owner_user_id_fkey"
            columns: ["owner_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "leads_owner_user_id_fkey"
            columns: ["owner_user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "leads_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leads_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "public_projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leads_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leads_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "public_properties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leads_requirement_id_fkey"
            columns: ["requirement_id"]
            isOneToOne: false
            referencedRelation: "requirements"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leads_sender_user_id_fkey"
            columns: ["sender_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "leads_sender_user_id_fkey"
            columns: ["sender_user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "leads_unit_id_fkey"
            columns: ["unit_id"]
            isOneToOne: false
            referencedRelation: "project_units"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leads_unit_id_fkey"
            columns: ["unit_id"]
            isOneToOne: false
            referencedRelation: "public_units"
            referencedColumns: ["id"]
          },
        ]
      }
      legal_documents: {
        Row: {
          body: Json
          created_at: string
          doc_key: string
          effective_from: string
          id: string
          is_current: boolean
          title: string
          version: number
        }
        Insert: {
          body?: Json
          created_at?: string
          doc_key: string
          effective_from: string
          id?: string
          is_current?: boolean
          title: string
          version: number
        }
        Update: {
          body?: Json
          created_at?: string
          doc_key?: string
          effective_from?: string
          id?: string
          is_current?: boolean
          title?: string
          version?: number
        }
        Relationships: []
      }
      location_aliases: {
        Row: {
          alias: string
          created_at: string
          id: string
          location_id: string
        }
        Insert: {
          alias: string
          created_at?: string
          id?: string
          location_id: string
        }
        Update: {
          alias?: string
          created_at?: string
          id?: string
          location_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "location_aliases_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "location_aliases_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "public_locations"
            referencedColumns: ["id"]
          },
        ]
      }
      location_slug_history: {
        Row: {
          changed_at: string
          id: string
          location_id: string
          old_slug: string
        }
        Insert: {
          changed_at?: string
          id?: string
          location_id: string
          old_slug: string
        }
        Update: {
          changed_at?: string
          id?: string
          location_id?: string
          old_slug?: string
        }
        Relationships: [
          {
            foreignKeyName: "location_slug_history_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "location_slug_history_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "public_locations"
            referencedColumns: ["id"]
          },
        ]
      }
      locations: {
        Row: {
          created_at: string
          id: string
          is_active: boolean
          level: Database["public"]["Enums"]["location_level"]
          name: string
          parent_id: string | null
          slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean
          level: Database["public"]["Enums"]["location_level"]
          name: string
          parent_id?: string | null
          slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean
          level?: Database["public"]["Enums"]["location_level"]
          name?: string
          parent_id?: string | null
          slug?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "locations_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "locations_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "public_locations"
            referencedColumns: ["id"]
          },
        ]
      }
      maintenance_events: {
        Row: {
          created_at: string
          created_by: string | null
          ends_at: string | null
          id: string
          kind: string
          message: string
          starts_at: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          ends_at?: string | null
          id?: string
          kind: string
          message: string
          starts_at: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          ends_at?: string | null
          id?: string
          kind?: string
          message?: string
          starts_at?: string
        }
        Relationships: []
      }
      missing_location_requests: {
        Row: {
          created_at: string
          id: string
          level: Database["public"]["Enums"]["location_level"]
          name: string
          parent_hint: string | null
          requested_by: string | null
          resolved_location_id: string | null
          status: Database["public"]["Enums"]["moderation_status"]
        }
        Insert: {
          created_at?: string
          id?: string
          level: Database["public"]["Enums"]["location_level"]
          name: string
          parent_hint?: string | null
          requested_by?: string | null
          resolved_location_id?: string | null
          status?: Database["public"]["Enums"]["moderation_status"]
        }
        Update: {
          created_at?: string
          id?: string
          level?: Database["public"]["Enums"]["location_level"]
          name?: string
          parent_hint?: string | null
          requested_by?: string | null
          resolved_location_id?: string | null
          status?: Database["public"]["Enums"]["moderation_status"]
        }
        Relationships: [
          {
            foreignKeyName: "missing_location_requests_requested_by_fkey"
            columns: ["requested_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "missing_location_requests_requested_by_fkey"
            columns: ["requested_by"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "missing_location_requests_resolved_location_id_fkey"
            columns: ["resolved_location_id"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "missing_location_requests_resolved_location_id_fkey"
            columns: ["resolved_location_id"]
            isOneToOne: false
            referencedRelation: "public_locations"
            referencedColumns: ["id"]
          },
        ]
      }
      mobile_change_requests: {
        Row: {
          created_at: string
          id: string
          new_mobile: string
          status: Database["public"]["Enums"]["moderation_status"]
          user_id: string
          verified_at: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          new_mobile: string
          status?: Database["public"]["Enums"]["moderation_status"]
          user_id: string
          verified_at?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          new_mobile?: string
          status?: Database["public"]["Enums"]["moderation_status"]
          user_id?: string
          verified_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mobile_change_requests_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "mobile_change_requests_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      moderation_actions: {
        Row: {
          action: string
          actor_id: string
          case_id: string
          correlation_id: string
          created_at: string
          id: string
          reason: string
        }
        Insert: {
          action: string
          actor_id: string
          case_id: string
          correlation_id?: string
          created_at?: string
          id?: string
          reason: string
        }
        Update: {
          action?: string
          actor_id?: string
          case_id?: string
          correlation_id?: string
          created_at?: string
          id?: string
          reason?: string
        }
        Relationships: [
          {
            foreignKeyName: "moderation_actions_case_id_fkey"
            columns: ["case_id"]
            isOneToOne: false
            referencedRelation: "moderation_cases"
            referencedColumns: ["id"]
          },
        ]
      }
      moderation_cases: {
        Row: {
          assigned_to: string | null
          closed_at: string | null
          entity_id: string
          entity_kind: string
          id: string
          opened_at: string
          status: Database["public"]["Enums"]["moderation_status"]
        }
        Insert: {
          assigned_to?: string | null
          closed_at?: string | null
          entity_id: string
          entity_kind: string
          id?: string
          opened_at?: string
          status?: Database["public"]["Enums"]["moderation_status"]
        }
        Update: {
          assigned_to?: string | null
          closed_at?: string | null
          entity_id?: string
          entity_kind?: string
          id?: string
          opened_at?: string
          status?: Database["public"]["Enums"]["moderation_status"]
        }
        Relationships: [
          {
            foreignKeyName: "moderation_cases_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "staff_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      notifications: {
        Row: {
          archived_at: string | null
          body: string
          channel: Database["public"]["Enums"]["notification_channel"]
          created_at: string
          destination_path: string | null
          entity_id: string | null
          entity_kind: string | null
          id: string
          read_at: string | null
          title: string
          user_id: string
        }
        Insert: {
          archived_at?: string | null
          body: string
          channel?: Database["public"]["Enums"]["notification_channel"]
          created_at?: string
          destination_path?: string | null
          entity_id?: string | null
          entity_kind?: string | null
          id?: string
          read_at?: string | null
          title: string
          user_id: string
        }
        Update: {
          archived_at?: string | null
          body?: string
          channel?: Database["public"]["Enums"]["notification_channel"]
          created_at?: string
          destination_path?: string | null
          entity_id?: string | null
          entity_kind?: string | null
          id?: string
          read_at?: string | null
          title?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      outbox_events: {
        Row: {
          attempts: number
          correlation_id: string
          created_at: string
          id: string
          idempotency_key: string | null
          next_attempt_at: string | null
          payload: Json
          processed_at: string | null
          topic: string
        }
        Insert: {
          attempts?: number
          correlation_id?: string
          created_at?: string
          id?: string
          idempotency_key?: string | null
          next_attempt_at?: string | null
          payload?: Json
          processed_at?: string | null
          topic: string
        }
        Update: {
          attempts?: number
          correlation_id?: string
          created_at?: string
          id?: string
          idempotency_key?: string | null
          next_attempt_at?: string | null
          payload?: Json
          processed_at?: string | null
          topic?: string
        }
        Relationships: []
      }
      owner_profiles: {
        Row: {
          created_at: string
          preferred_city_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          preferred_city_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          preferred_city_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "owner_profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "owner_profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      payment_events: {
        Row: {
          correlation_id: string
          created_at: string
          id: string
          kind: string
          order_id: string | null
          payload: Json
          payment_id: string | null
          provider_event_id: string | null
        }
        Insert: {
          correlation_id?: string
          created_at?: string
          id?: string
          kind: string
          order_id?: string | null
          payload?: Json
          payment_id?: string | null
          provider_event_id?: string | null
        }
        Update: {
          correlation_id?: string
          created_at?: string
          id?: string
          kind?: string
          order_id?: string | null
          payload?: Json
          payment_id?: string | null
          provider_event_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payment_events_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "payment_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payment_events_payment_id_fkey"
            columns: ["payment_id"]
            isOneToOne: false
            referencedRelation: "payments"
            referencedColumns: ["id"]
          },
        ]
      }
      payment_orders: {
        Row: {
          amount_minor: number
          created_at: string
          currency: string
          id: string
          idempotency_key: string | null
          provider_key: string
          provider_order_id: string | null
          status: Database["public"]["Enums"]["payment_status"]
          subscription_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          amount_minor: number
          created_at?: string
          currency?: string
          id?: string
          idempotency_key?: string | null
          provider_key?: string
          provider_order_id?: string | null
          status?: Database["public"]["Enums"]["payment_status"]
          subscription_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          amount_minor?: number
          created_at?: string
          currency?: string
          id?: string
          idempotency_key?: string | null
          provider_key?: string
          provider_order_id?: string | null
          status?: Database["public"]["Enums"]["payment_status"]
          subscription_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "payment_orders_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payment_orders_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "payment_orders_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      payment_reconciliation_cases: {
        Row: {
          detail: Json
          id: string
          opened_at: string
          order_id: string | null
          resolved_at: string | null
          status: string
        }
        Insert: {
          detail?: Json
          id?: string
          opened_at?: string
          order_id?: string | null
          resolved_at?: string | null
          status: string
        }
        Update: {
          detail?: Json
          id?: string
          opened_at?: string
          order_id?: string | null
          resolved_at?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "payment_reconciliation_cases_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "payment_orders"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          amount_minor: number
          captured_at: string | null
          created_at: string
          id: string
          method: string | null
          order_id: string
          provider_payment_id: string | null
          status: Database["public"]["Enums"]["payment_status"]
          updated_at: string
        }
        Insert: {
          amount_minor: number
          captured_at?: string | null
          created_at?: string
          id?: string
          method?: string | null
          order_id: string
          provider_payment_id?: string | null
          status?: Database["public"]["Enums"]["payment_status"]
          updated_at?: string
        }
        Update: {
          amount_minor?: number
          captured_at?: string | null
          created_at?: string
          id?: string
          method?: string | null
          order_id?: string
          provider_payment_id?: string | null
          status?: Database["public"]["Enums"]["payment_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "payments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "payment_orders"
            referencedColumns: ["id"]
          },
        ]
      }
      permissions: {
        Row: {
          category: string
          is_sensitive: boolean
          label: string
          permission_key: string
        }
        Insert: {
          category: string
          is_sensitive?: boolean
          label: string
          permission_key: string
        }
        Update: {
          category?: string
          is_sensitive?: boolean
          label?: string
          permission_key?: string
        }
        Relationships: []
      }
      plan_features: {
        Row: {
          feature_key: string
          limit_value: number | null
          plan_id: string
        }
        Insert: {
          feature_key: string
          limit_value?: number | null
          plan_id: string
        }
        Update: {
          feature_key?: string
          limit_value?: number | null
          plan_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "plan_features_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "plans"
            referencedColumns: ["id"]
          },
        ]
      }
      plan_versions: {
        Row: {
          created_at: string
          currency: string
          id: string
          is_current: boolean
          period_days: number
          plan_id: string
          price_minor: number
          version: number
        }
        Insert: {
          created_at?: string
          currency?: string
          id?: string
          is_current?: boolean
          period_days: number
          plan_id: string
          price_minor: number
          version: number
        }
        Update: {
          created_at?: string
          currency?: string
          id?: string
          is_current?: boolean
          period_days?: number
          plan_id?: string
          price_minor?: number
          version?: number
        }
        Relationships: [
          {
            foreignKeyName: "plan_versions_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "plans"
            referencedColumns: ["id"]
          },
        ]
      }
      plans: {
        Row: {
          audience: Database["public"]["Enums"]["public_role"]
          created_at: string
          id: string
          is_active: boolean
          name: string
          plan_key: string
        }
        Insert: {
          audience: Database["public"]["Enums"]["public_role"]
          created_at?: string
          id?: string
          is_active?: boolean
          name: string
          plan_key: string
        }
        Update: {
          audience?: Database["public"]["Enums"]["public_role"]
          created_at?: string
          id?: string
          is_active?: boolean
          name?: string
          plan_key?: string
        }
        Relationships: []
      }
      profile_verification_cases: {
        Row: {
          created_at: string
          decided_at: string | null
          id: string
          reason: string | null
          reviewer_id: string | null
          status: Database["public"]["Enums"]["verification_status"]
          user_id: string
        }
        Insert: {
          created_at?: string
          decided_at?: string | null
          id?: string
          reason?: string | null
          reviewer_id?: string | null
          status?: Database["public"]["Enums"]["verification_status"]
          user_id: string
        }
        Update: {
          created_at?: string
          decided_at?: string | null
          id?: string
          reason?: string | null
          reviewer_id?: string | null
          status?: Database["public"]["Enums"]["verification_status"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "profile_verification_cases_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "profile_verification_cases_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      profile_verification_documents: {
        Row: {
          case_id: string
          created_at: string
          doc_kind: string
          id: string
          storage_path: string
        }
        Insert: {
          case_id: string
          created_at?: string
          doc_kind: string
          id?: string
          storage_path: string
        }
        Update: {
          case_id?: string
          created_at?: string
          doc_kind?: string
          id?: string
          storage_path?: string
        }
        Relationships: [
          {
            foreignKeyName: "profile_verification_documents_case_id_fkey"
            columns: ["case_id"]
            isOneToOne: false
            referencedRelation: "profile_verification_cases"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          account_status: Database["public"]["Enums"]["account_status"]
          avatar_media_id: string | null
          created_at: string
          deleted_at: string | null
          email: string
          full_name: string
          mobile: string
          onboarding_status: Database["public"]["Enums"]["onboarding_status"]
          profile_completion: Database["public"]["Enums"]["profile_completion"]
          role: Database["public"]["Enums"]["public_role"]
          updated_at: string
          user_id: string
          verification: Database["public"]["Enums"]["verification_status"]
        }
        Insert: {
          account_status?: Database["public"]["Enums"]["account_status"]
          avatar_media_id?: string | null
          created_at?: string
          deleted_at?: string | null
          email: string
          full_name: string
          mobile: string
          onboarding_status?: Database["public"]["Enums"]["onboarding_status"]
          profile_completion?: Database["public"]["Enums"]["profile_completion"]
          role: Database["public"]["Enums"]["public_role"]
          updated_at?: string
          user_id: string
          verification?: Database["public"]["Enums"]["verification_status"]
        }
        Update: {
          account_status?: Database["public"]["Enums"]["account_status"]
          avatar_media_id?: string | null
          created_at?: string
          deleted_at?: string | null
          email?: string
          full_name?: string
          mobile?: string
          onboarding_status?: Database["public"]["Enums"]["onboarding_status"]
          profile_completion?: Database["public"]["Enums"]["profile_completion"]
          role?: Database["public"]["Enums"]["public_role"]
          updated_at?: string
          user_id?: string
          verification?: Database["public"]["Enums"]["verification_status"]
        }
        Relationships: []
      }
      project_amenities: {
        Row: {
          amenity_key: string
          project_id: string
        }
        Insert: {
          amenity_key: string
          project_id: string
        }
        Update: {
          amenity_key?: string
          project_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_amenities_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_amenities_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "public_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      project_details: {
        Row: {
          description: string | null
          land_area_sqyd: number | null
          price_max_minor: number | null
          price_min_minor: number | null
          project_id: string
          total_towers: number | null
          total_units: number | null
          updated_at: string
        }
        Insert: {
          description?: string | null
          land_area_sqyd?: number | null
          price_max_minor?: number | null
          price_min_minor?: number | null
          project_id: string
          total_towers?: number | null
          total_units?: number | null
          updated_at?: string
        }
        Update: {
          description?: string | null
          land_area_sqyd?: number | null
          price_max_minor?: number | null
          price_min_minor?: number | null
          project_id?: string
          total_towers?: number | null
          total_units?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_details_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: true
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_details_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: true
            referencedRelation: "public_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      project_documents: {
        Row: {
          created_at: string
          doc_kind: string
          id: string
          is_public: boolean
          project_id: string
          storage_path: string
        }
        Insert: {
          created_at?: string
          doc_kind: string
          id?: string
          is_public?: boolean
          project_id: string
          storage_path: string
        }
        Update: {
          created_at?: string
          doc_kind?: string
          id?: string
          is_public?: boolean
          project_id?: string
          storage_path?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_documents_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_documents_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "public_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      project_drafts: {
        Row: {
          builder_user_id: string
          created_at: string
          id: string
          payload: Json
          updated_at: string
        }
        Insert: {
          builder_user_id: string
          created_at?: string
          id?: string
          payload?: Json
          updated_at?: string
        }
        Update: {
          builder_user_id?: string
          created_at?: string
          id?: string
          payload?: Json
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_drafts_builder_user_id_fkey"
            columns: ["builder_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "project_drafts_builder_user_id_fkey"
            columns: ["builder_user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      project_media: {
        Row: {
          created_at: string
          id: string
          media_kind: string
          project_id: string
          sort_order: number
          storage_path: string
        }
        Insert: {
          created_at?: string
          id?: string
          media_kind?: string
          project_id: string
          sort_order?: number
          storage_path: string
        }
        Update: {
          created_at?: string
          id?: string
          media_kind?: string
          project_id?: string
          sort_order?: number
          storage_path?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_media_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_media_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "public_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      project_status_history: {
        Row: {
          actor_id: string | null
          correlation_id: string
          created_at: string
          field: string
          from_value: string | null
          id: string
          project_id: string
          reason: string | null
          to_value: string
        }
        Insert: {
          actor_id?: string | null
          correlation_id?: string
          created_at?: string
          field: string
          from_value?: string | null
          id?: string
          project_id: string
          reason?: string | null
          to_value: string
        }
        Update: {
          actor_id?: string | null
          correlation_id?: string
          created_at?: string
          field?: string
          from_value?: string | null
          id?: string
          project_id?: string
          reason?: string | null
          to_value?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_status_history_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_status_history_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "public_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      project_units: {
        Row: {
          available_count: number
          carpet_area_sqft: number | null
          created_at: string
          deleted_at: string | null
          id: string
          lifecycle: Database["public"]["Enums"]["lifecycle_status"]
          price_minor: number | null
          project_id: string
          publication: Database["public"]["Enums"]["publication_status"]
          total_count: number
          unit_label: string
          unit_type: string
          updated_at: string
        }
        Insert: {
          available_count?: number
          carpet_area_sqft?: number | null
          created_at?: string
          deleted_at?: string | null
          id?: string
          lifecycle?: Database["public"]["Enums"]["lifecycle_status"]
          price_minor?: number | null
          project_id: string
          publication?: Database["public"]["Enums"]["publication_status"]
          total_count?: number
          unit_label: string
          unit_type: string
          updated_at?: string
        }
        Update: {
          available_count?: number
          carpet_area_sqft?: number | null
          created_at?: string
          deleted_at?: string | null
          id?: string
          lifecycle?: Database["public"]["Enums"]["lifecycle_status"]
          price_minor?: number | null
          project_id?: string
          publication?: Database["public"]["Enums"]["publication_status"]
          total_count?: number
          unit_label?: string
          unit_type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_units_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_units_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "public_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          address_text: string
          builder_user_id: string
          city_id: string
          created_at: string
          deleted_at: string | null
          id: string
          lifecycle: Database["public"]["Enums"]["lifecycle_status"]
          locality_id: string | null
          moderation: Database["public"]["Enums"]["moderation_status"]
          name: string
          possession_by: string | null
          publication: Database["public"]["Enums"]["publication_status"]
          rera_number: string | null
          slug: string
          updated_at: string
        }
        Insert: {
          address_text?: string
          builder_user_id: string
          city_id: string
          created_at?: string
          deleted_at?: string | null
          id?: string
          lifecycle?: Database["public"]["Enums"]["lifecycle_status"]
          locality_id?: string | null
          moderation?: Database["public"]["Enums"]["moderation_status"]
          name: string
          possession_by?: string | null
          publication?: Database["public"]["Enums"]["publication_status"]
          rera_number?: string | null
          slug: string
          updated_at?: string
        }
        Update: {
          address_text?: string
          builder_user_id?: string
          city_id?: string
          created_at?: string
          deleted_at?: string | null
          id?: string
          lifecycle?: Database["public"]["Enums"]["lifecycle_status"]
          locality_id?: string | null
          moderation?: Database["public"]["Enums"]["moderation_status"]
          name?: string
          possession_by?: string | null
          publication?: Database["public"]["Enums"]["publication_status"]
          rera_number?: string | null
          slug?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "projects_builder_user_id_fkey"
            columns: ["builder_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "projects_builder_user_id_fkey"
            columns: ["builder_user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "projects_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projects_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "public_locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projects_locality_id_fkey"
            columns: ["locality_id"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projects_locality_id_fkey"
            columns: ["locality_id"]
            isOneToOne: false
            referencedRelation: "public_locations"
            referencedColumns: ["id"]
          },
        ]
      }
      promotion_clicks: {
        Row: {
          count: number
          day: string
          id: string
          promotion_id: string
        }
        Insert: {
          count?: number
          day?: string
          id?: string
          promotion_id: string
        }
        Update: {
          count?: number
          day?: string
          id?: string
          promotion_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "promotion_clicks_promotion_id_fkey"
            columns: ["promotion_id"]
            isOneToOne: false
            referencedRelation: "promotions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "promotion_clicks_promotion_id_fkey"
            columns: ["promotion_id"]
            isOneToOne: false
            referencedRelation: "public_promotions"
            referencedColumns: ["id"]
          },
        ]
      }
      promotion_creatives: {
        Row: {
          created_at: string
          headline: string
          id: string
          promotion_id: string
          sort_order: number
          storage_path: string
        }
        Insert: {
          created_at?: string
          headline: string
          id?: string
          promotion_id: string
          sort_order?: number
          storage_path: string
        }
        Update: {
          created_at?: string
          headline?: string
          id?: string
          promotion_id?: string
          sort_order?: number
          storage_path?: string
        }
        Relationships: [
          {
            foreignKeyName: "promotion_creatives_promotion_id_fkey"
            columns: ["promotion_id"]
            isOneToOne: false
            referencedRelation: "promotions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "promotion_creatives_promotion_id_fkey"
            columns: ["promotion_id"]
            isOneToOne: false
            referencedRelation: "public_promotions"
            referencedColumns: ["id"]
          },
        ]
      }
      promotion_impressions: {
        Row: {
          count: number
          day: string
          id: string
          promotion_id: string
        }
        Insert: {
          count?: number
          day?: string
          id?: string
          promotion_id: string
        }
        Update: {
          count?: number
          day?: string
          id?: string
          promotion_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "promotion_impressions_promotion_id_fkey"
            columns: ["promotion_id"]
            isOneToOne: false
            referencedRelation: "promotions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "promotion_impressions_promotion_id_fkey"
            columns: ["promotion_id"]
            isOneToOne: false
            referencedRelation: "public_promotions"
            referencedColumns: ["id"]
          },
        ]
      }
      promotion_schedules: {
        Row: {
          created_at: string
          id: string
          position: number
          promotion_id: string
          slot_date: string
        }
        Insert: {
          created_at?: string
          id?: string
          position: number
          promotion_id: string
          slot_date: string
        }
        Update: {
          created_at?: string
          id?: string
          position?: number
          promotion_id?: string
          slot_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "promotion_schedules_promotion_id_fkey"
            columns: ["promotion_id"]
            isOneToOne: false
            referencedRelation: "promotions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "promotion_schedules_promotion_id_fkey"
            columns: ["promotion_id"]
            isOneToOne: false
            referencedRelation: "public_promotions"
            referencedColumns: ["id"]
          },
        ]
      }
      promotion_status_history: {
        Row: {
          actor_id: string | null
          correlation_id: string
          created_at: string
          from_status: Database["public"]["Enums"]["promotion_status"] | null
          id: string
          promotion_id: string
          reason: string | null
          to_status: Database["public"]["Enums"]["promotion_status"]
        }
        Insert: {
          actor_id?: string | null
          correlation_id?: string
          created_at?: string
          from_status?: Database["public"]["Enums"]["promotion_status"] | null
          id?: string
          promotion_id: string
          reason?: string | null
          to_status: Database["public"]["Enums"]["promotion_status"]
        }
        Update: {
          actor_id?: string | null
          correlation_id?: string
          created_at?: string
          from_status?: Database["public"]["Enums"]["promotion_status"] | null
          id?: string
          promotion_id?: string
          reason?: string | null
          to_status?: Database["public"]["Enums"]["promotion_status"]
        }
        Relationships: [
          {
            foreignKeyName: "promotion_status_history_promotion_id_fkey"
            columns: ["promotion_id"]
            isOneToOne: false
            referencedRelation: "promotions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "promotion_status_history_promotion_id_fkey"
            columns: ["promotion_id"]
            isOneToOne: false
            referencedRelation: "public_promotions"
            referencedColumns: ["id"]
          },
        ]
      }
      promotions: {
        Row: {
          builder_user_id: string
          created_at: string
          ends_at: string | null
          id: string
          project_id: string
          starts_at: string | null
          status: Database["public"]["Enums"]["promotion_status"]
          updated_at: string
        }
        Insert: {
          builder_user_id: string
          created_at?: string
          ends_at?: string | null
          id?: string
          project_id: string
          starts_at?: string | null
          status?: Database["public"]["Enums"]["promotion_status"]
          updated_at?: string
        }
        Update: {
          builder_user_id?: string
          created_at?: string
          ends_at?: string | null
          id?: string
          project_id?: string
          starts_at?: string | null
          status?: Database["public"]["Enums"]["promotion_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "promotions_builder_user_id_fkey"
            columns: ["builder_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "promotions_builder_user_id_fkey"
            columns: ["builder_user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "promotions_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "promotions_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "public_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      properties: {
        Row: {
          address_text: string
          city_id: string
          created_at: string
          deleted_at: string | null
          id: string
          lifecycle: Database["public"]["Enums"]["lifecycle_status"]
          locality_id: string | null
          moderation: Database["public"]["Enums"]["moderation_status"]
          owner_user_id: string
          price_minor: number | null
          property_type: string
          publication: Database["public"]["Enums"]["publication_status"]
          purpose: Database["public"]["Enums"]["property_purpose"]
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          address_text?: string
          city_id: string
          created_at?: string
          deleted_at?: string | null
          id?: string
          lifecycle?: Database["public"]["Enums"]["lifecycle_status"]
          locality_id?: string | null
          moderation?: Database["public"]["Enums"]["moderation_status"]
          owner_user_id: string
          price_minor?: number | null
          property_type: string
          publication?: Database["public"]["Enums"]["publication_status"]
          purpose: Database["public"]["Enums"]["property_purpose"]
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          address_text?: string
          city_id?: string
          created_at?: string
          deleted_at?: string | null
          id?: string
          lifecycle?: Database["public"]["Enums"]["lifecycle_status"]
          locality_id?: string | null
          moderation?: Database["public"]["Enums"]["moderation_status"]
          owner_user_id?: string
          price_minor?: number | null
          property_type?: string
          publication?: Database["public"]["Enums"]["publication_status"]
          purpose?: Database["public"]["Enums"]["property_purpose"]
          slug?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "properties_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "properties_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "public_locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "properties_locality_id_fkey"
            columns: ["locality_id"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "properties_locality_id_fkey"
            columns: ["locality_id"]
            isOneToOne: false
            referencedRelation: "public_locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "properties_owner_user_id_fkey"
            columns: ["owner_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "properties_owner_user_id_fkey"
            columns: ["owner_user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      property_amenities: {
        Row: {
          amenity_key: string
          property_id: string
        }
        Insert: {
          amenity_key: string
          property_id: string
        }
        Update: {
          amenity_key?: string
          property_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "property_amenities_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "property_amenities_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "public_properties"
            referencedColumns: ["id"]
          },
        ]
      }
      property_details: {
        Row: {
          age_years: number | null
          bathrooms: number | null
          bedrooms: number | null
          built_up_area_sqft: number | null
          carpet_area_sqft: number | null
          description: string | null
          facing: string | null
          floor_number: number | null
          furnishing: string | null
          property_id: string
          total_floors: number | null
          updated_at: string
        }
        Insert: {
          age_years?: number | null
          bathrooms?: number | null
          bedrooms?: number | null
          built_up_area_sqft?: number | null
          carpet_area_sqft?: number | null
          description?: string | null
          facing?: string | null
          floor_number?: number | null
          furnishing?: string | null
          property_id: string
          total_floors?: number | null
          updated_at?: string
        }
        Update: {
          age_years?: number | null
          bathrooms?: number | null
          bedrooms?: number | null
          built_up_area_sqft?: number | null
          carpet_area_sqft?: number | null
          description?: string | null
          facing?: string | null
          floor_number?: number | null
          furnishing?: string | null
          property_id?: string
          total_floors?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "property_details_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: true
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "property_details_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: true
            referencedRelation: "public_properties"
            referencedColumns: ["id"]
          },
        ]
      }
      property_drafts: {
        Row: {
          created_at: string
          id: string
          owner_user_id: string
          payload: Json
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          owner_user_id: string
          payload?: Json
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          owner_user_id?: string
          payload?: Json
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "property_drafts_owner_user_id_fkey"
            columns: ["owner_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "property_drafts_owner_user_id_fkey"
            columns: ["owner_user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      property_media: {
        Row: {
          created_at: string
          id: string
          media_kind: string
          property_id: string
          sort_order: number
          storage_path: string
        }
        Insert: {
          created_at?: string
          id?: string
          media_kind?: string
          property_id: string
          sort_order?: number
          storage_path: string
        }
        Update: {
          created_at?: string
          id?: string
          media_kind?: string
          property_id?: string
          sort_order?: number
          storage_path?: string
        }
        Relationships: [
          {
            foreignKeyName: "property_media_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "property_media_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "public_properties"
            referencedColumns: ["id"]
          },
        ]
      }
      property_status_history: {
        Row: {
          actor_id: string | null
          correlation_id: string
          created_at: string
          field: string
          from_value: string | null
          id: string
          property_id: string
          reason: string | null
          to_value: string
        }
        Insert: {
          actor_id?: string | null
          correlation_id?: string
          created_at?: string
          field: string
          from_value?: string | null
          id?: string
          property_id: string
          reason?: string | null
          to_value: string
        }
        Update: {
          actor_id?: string | null
          correlation_id?: string
          created_at?: string
          field?: string
          from_value?: string | null
          id?: string
          property_id?: string
          reason?: string | null
          to_value?: string
        }
        Relationships: [
          {
            foreignKeyName: "property_status_history_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "property_status_history_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "public_properties"
            referencedColumns: ["id"]
          },
        ]
      }
      provider_configurations: {
        Row: {
          last_status_change: string
          mode: string | null
          non_secret_config: Json
          provider_key: string
          status: Database["public"]["Enums"]["provider_status"]
          updated_at: string
        }
        Insert: {
          last_status_change?: string
          mode?: string | null
          non_secret_config?: Json
          provider_key: string
          status?: Database["public"]["Enums"]["provider_status"]
          updated_at?: string
        }
        Update: {
          last_status_change?: string
          mode?: string | null
          non_secret_config?: Json
          provider_key?: string
          status?: Database["public"]["Enums"]["provider_status"]
          updated_at?: string
        }
        Relationships: []
      }
      provider_delivery_events: {
        Row: {
          channel: Database["public"]["Enums"]["notification_channel"]
          correlation_id: string
          created_at: string
          error_detail: string | null
          id: string
          provider_key: string
          provider_message_id: string | null
          recipient_ref: string
          status: string
        }
        Insert: {
          channel: Database["public"]["Enums"]["notification_channel"]
          correlation_id?: string
          created_at?: string
          error_detail?: string | null
          id?: string
          provider_key: string
          provider_message_id?: string | null
          recipient_ref: string
          status: string
        }
        Update: {
          channel?: Database["public"]["Enums"]["notification_channel"]
          correlation_id?: string
          created_at?: string
          error_detail?: string | null
          id?: string
          provider_key?: string
          provider_message_id?: string | null
          recipient_ref?: string
          status?: string
        }
        Relationships: []
      }
      provider_health_checks: {
        Row: {
          checked_at: string
          detail: string | null
          id: string
          latency_ms: number | null
          provider_key: string
          status: Database["public"]["Enums"]["provider_status"]
        }
        Insert: {
          checked_at?: string
          detail?: string | null
          id?: string
          latency_ms?: number | null
          provider_key: string
          status: Database["public"]["Enums"]["provider_status"]
        }
        Update: {
          checked_at?: string
          detail?: string | null
          id?: string
          latency_ms?: number | null
          provider_key?: string
          status?: Database["public"]["Enums"]["provider_status"]
        }
        Relationships: [
          {
            foreignKeyName: "provider_health_checks_provider_key_fkey"
            columns: ["provider_key"]
            isOneToOne: false
            referencedRelation: "provider_configurations"
            referencedColumns: ["provider_key"]
          },
        ]
      }
      recovery_actions: {
        Row: {
          correlation_id: string
          created_at: string
          decided_at: string | null
          decided_by: string | null
          entity_id: string
          entity_kind: string
          id: string
          reason: string
          requested_by: string | null
          status: Database["public"]["Enums"]["recovery_status"]
        }
        Insert: {
          correlation_id?: string
          created_at?: string
          decided_at?: string | null
          decided_by?: string | null
          entity_id: string
          entity_kind: string
          id?: string
          reason: string
          requested_by?: string | null
          status?: Database["public"]["Enums"]["recovery_status"]
        }
        Update: {
          correlation_id?: string
          created_at?: string
          decided_at?: string | null
          decided_by?: string | null
          entity_id?: string
          entity_kind?: string
          id?: string
          reason?: string
          requested_by?: string | null
          status?: Database["public"]["Enums"]["recovery_status"]
        }
        Relationships: []
      }
      redirects: {
        Row: {
          created_at: string
          from_path: string
          id: string
          is_permanent: boolean
          to_path: string
        }
        Insert: {
          created_at?: string
          from_path: string
          id?: string
          is_permanent?: boolean
          to_path: string
        }
        Update: {
          created_at?: string
          from_path?: string
          id?: string
          is_permanent?: boolean
          to_path?: string
        }
        Relationships: []
      }
      refunds: {
        Row: {
          actor_id: string | null
          amount_minor: number
          created_at: string
          id: string
          payment_id: string
          provider_refund_id: string | null
          reason: string
          status: Database["public"]["Enums"]["payment_status"]
        }
        Insert: {
          actor_id?: string | null
          amount_minor: number
          created_at?: string
          id?: string
          payment_id: string
          provider_refund_id?: string | null
          reason: string
          status?: Database["public"]["Enums"]["payment_status"]
        }
        Update: {
          actor_id?: string | null
          amount_minor?: number
          created_at?: string
          id?: string
          payment_id?: string
          provider_refund_id?: string | null
          reason?: string
          status?: Database["public"]["Enums"]["payment_status"]
        }
        Relationships: [
          {
            foreignKeyName: "refunds_payment_id_fkey"
            columns: ["payment_id"]
            isOneToOne: false
            referencedRelation: "payments"
            referencedColumns: ["id"]
          },
        ]
      }
      report_actions: {
        Row: {
          action: string
          actor_id: string
          created_at: string
          id: string
          reason: string | null
          report_id: string
        }
        Insert: {
          action: string
          actor_id: string
          created_at?: string
          id?: string
          reason?: string | null
          report_id: string
        }
        Update: {
          action?: string
          actor_id?: string
          created_at?: string
          id?: string
          reason?: string | null
          report_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "report_actions_report_id_fkey"
            columns: ["report_id"]
            isOneToOne: false
            referencedRelation: "reports"
            referencedColumns: ["id"]
          },
        ]
      }
      reports: {
        Row: {
          created_at: string
          entity_id: string
          entity_kind: string
          id: string
          reason: string
          reporter_user_id: string | null
          status: Database["public"]["Enums"]["report_status"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          entity_id: string
          entity_kind: string
          id?: string
          reason: string
          reporter_user_id?: string | null
          status?: Database["public"]["Enums"]["report_status"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          entity_id?: string
          entity_kind?: string
          id?: string
          reason?: string
          reporter_user_id?: string | null
          status?: Database["public"]["Enums"]["report_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "reports_reporter_user_id_fkey"
            columns: ["reporter_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "reports_reporter_user_id_fkey"
            columns: ["reporter_user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      requirement_drafts: {
        Row: {
          created_at: string
          id: string
          payload: Json
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          payload?: Json
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          payload?: Json
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "requirement_drafts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "requirement_drafts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      requirement_responses: {
        Row: {
          created_at: string
          id: string
          message: string
          requirement_id: string
          responder_user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          message: string
          requirement_id: string
          responder_user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          message?: string
          requirement_id?: string
          responder_user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "requirement_responses_requirement_id_fkey"
            columns: ["requirement_id"]
            isOneToOne: false
            referencedRelation: "requirements"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "requirement_responses_responder_user_id_fkey"
            columns: ["responder_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "requirement_responses_responder_user_id_fkey"
            columns: ["responder_user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      requirement_status_history: {
        Row: {
          actor_id: string | null
          correlation_id: string
          created_at: string
          field: string
          from_value: string | null
          id: string
          requirement_id: string
          to_value: string
        }
        Insert: {
          actor_id?: string | null
          correlation_id?: string
          created_at?: string
          field: string
          from_value?: string | null
          id?: string
          requirement_id: string
          to_value: string
        }
        Update: {
          actor_id?: string | null
          correlation_id?: string
          created_at?: string
          field?: string
          from_value?: string | null
          id?: string
          requirement_id?: string
          to_value?: string
        }
        Relationships: [
          {
            foreignKeyName: "requirement_status_history_requirement_id_fkey"
            columns: ["requirement_id"]
            isOneToOne: false
            referencedRelation: "requirements"
            referencedColumns: ["id"]
          },
        ]
      }
      requirements: {
        Row: {
          budget_max_minor: number | null
          budget_min_minor: number | null
          city_id: string | null
          created_at: string
          deleted_at: string | null
          details: string | null
          id: string
          lifecycle: Database["public"]["Enums"]["lifecycle_status"]
          moderation: Database["public"]["Enums"]["moderation_status"]
          purpose: Database["public"]["Enums"]["property_purpose"]
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          budget_max_minor?: number | null
          budget_min_minor?: number | null
          city_id?: string | null
          created_at?: string
          deleted_at?: string | null
          details?: string | null
          id?: string
          lifecycle?: Database["public"]["Enums"]["lifecycle_status"]
          moderation?: Database["public"]["Enums"]["moderation_status"]
          purpose: Database["public"]["Enums"]["property_purpose"]
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          budget_max_minor?: number | null
          budget_min_minor?: number | null
          city_id?: string | null
          created_at?: string
          deleted_at?: string | null
          details?: string | null
          id?: string
          lifecycle?: Database["public"]["Enums"]["lifecycle_status"]
          moderation?: Database["public"]["Enums"]["moderation_status"]
          purpose?: Database["public"]["Enums"]["property_purpose"]
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "requirements_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "requirements_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "public_locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "requirements_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "requirements_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      role_assignments: {
        Row: {
          active: boolean
          assigned_at: string
          id: string
          revoked_at: string | null
          role: Database["public"]["Enums"]["public_role"]
          user_id: string
        }
        Insert: {
          active?: boolean
          assigned_at?: string
          id?: string
          revoked_at?: string | null
          role: Database["public"]["Enums"]["public_role"]
          user_id: string
        }
        Update: {
          active?: boolean
          assigned_at?: string
          id?: string
          revoked_at?: string | null
          role?: Database["public"]["Enums"]["public_role"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_assignments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "role_assignments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      role_change_requests: {
        Row: {
          created_at: string
          decided_at: string | null
          decided_by: string | null
          from_role: Database["public"]["Enums"]["public_role"]
          id: string
          reason: string | null
          status: Database["public"]["Enums"]["moderation_status"]
          to_role: Database["public"]["Enums"]["public_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          decided_at?: string | null
          decided_by?: string | null
          from_role: Database["public"]["Enums"]["public_role"]
          id?: string
          reason?: string | null
          status?: Database["public"]["Enums"]["moderation_status"]
          to_role: Database["public"]["Enums"]["public_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          decided_at?: string | null
          decided_by?: string | null
          from_role?: Database["public"]["Enums"]["public_role"]
          id?: string
          reason?: string | null
          status?: Database["public"]["Enums"]["moderation_status"]
          to_role?: Database["public"]["Enums"]["public_role"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_change_requests_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "role_change_requests_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      saved_projects: {
        Row: {
          created_at: string
          project_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          project_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          project_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "saved_projects_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "saved_projects_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "public_projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "saved_projects_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "saved_projects_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      saved_properties: {
        Row: {
          created_at: string
          property_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          property_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          property_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "saved_properties_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "saved_properties_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "public_properties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "saved_properties_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "saved_properties_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      saved_searches: {
        Row: {
          created_at: string
          id: string
          label: string
          query: Json
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          label: string
          query?: Json
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          label?: string
          query?: Json
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "saved_searches_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "saved_searches_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      scheduler_runs: {
        Row: {
          detail: Json
          fired_at: string
          id: string
          schedule_key: string
          status: string
        }
        Insert: {
          detail?: Json
          fired_at?: string
          id?: string
          schedule_key: string
          status: string
        }
        Update: {
          detail?: Json
          fired_at?: string
          id?: string
          schedule_key?: string
          status?: string
        }
        Relationships: []
      }
      security_events: {
        Row: {
          created_at: string
          detail: Json
          id: string
          ip_hash: string | null
          kind: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          detail?: Json
          id?: string
          ip_hash?: string | null
          kind: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          detail?: Json
          id?: string
          ip_hash?: string | null
          kind?: string
          user_id?: string | null
        }
        Relationships: []
      }
      seo_page_configs: {
        Row: {
          description_template: string
          id: string
          is_indexed: boolean
          location_id: string | null
          page_kind: string
          title_template: string
          updated_at: string
        }
        Insert: {
          description_template: string
          id?: string
          is_indexed?: boolean
          location_id?: string | null
          page_kind: string
          title_template: string
          updated_at?: string
        }
        Update: {
          description_template?: string
          id?: string
          is_indexed?: boolean
          location_id?: string | null
          page_kind?: string
          title_template?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "seo_page_configs_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "seo_page_configs_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "public_locations"
            referencedColumns: ["id"]
          },
        ]
      }
      session_metadata: {
        Row: {
          created_at: string
          device_label: string | null
          id: string
          ip_hash: string | null
          last_seen_at: string
          session_id: string
          user_agent: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          device_label?: string | null
          id?: string
          ip_hash?: string | null
          last_seen_at?: string
          session_id: string
          user_agent?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          device_label?: string | null
          id?: string
          ip_hash?: string | null
          last_seen_at?: string
          session_id?: string
          user_agent?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "session_metadata_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "session_metadata_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      staff_permission_overrides: {
        Row: {
          created_at: string
          granted: boolean
          permission_key: string
          reason: string
          set_by: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          granted: boolean
          permission_key: string
          reason: string
          set_by?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          granted?: boolean
          permission_key?: string
          reason?: string
          set_by?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "staff_permission_overrides_permission_key_fkey"
            columns: ["permission_key"]
            isOneToOne: false
            referencedRelation: "permissions"
            referencedColumns: ["permission_key"]
          },
          {
            foreignKeyName: "staff_permission_overrides_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "staff_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      staff_profiles: {
        Row: {
          created_at: string
          display_name: string
          internal_role: Database["public"]["Enums"]["internal_role"]
          is_active: boolean
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          display_name: string
          internal_role?: Database["public"]["Enums"]["internal_role"]
          is_active?: boolean
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          display_name?: string
          internal_role?: Database["public"]["Enums"]["internal_role"]
          is_active?: boolean
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      staff_role_permissions: {
        Row: {
          permission_key: string
          role_id: string
        }
        Insert: {
          permission_key: string
          role_id: string
        }
        Update: {
          permission_key?: string
          role_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "staff_role_permissions_permission_key_fkey"
            columns: ["permission_key"]
            isOneToOne: false
            referencedRelation: "permissions"
            referencedColumns: ["permission_key"]
          },
          {
            foreignKeyName: "staff_role_permissions_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "staff_roles"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_roles: {
        Row: {
          created_at: string
          description: string | null
          id: string
          label: string
          role_key: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          label: string
          role_key: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          label?: string
          role_key?: string
        }
        Relationships: []
      }
      staff_user_roles: {
        Row: {
          assigned_at: string
          assigned_by: string | null
          role_id: string
          user_id: string
        }
        Insert: {
          assigned_at?: string
          assigned_by?: string | null
          role_id: string
          user_id: string
        }
        Update: {
          assigned_at?: string
          assigned_by?: string | null
          role_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "staff_user_roles_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "staff_roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_user_roles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "staff_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      subscription_events: {
        Row: {
          correlation_id: string
          created_at: string
          detail: Json
          id: string
          kind: string
          subscription_id: string
        }
        Insert: {
          correlation_id?: string
          created_at?: string
          detail?: Json
          id?: string
          kind: string
          subscription_id: string
        }
        Update: {
          correlation_id?: string
          created_at?: string
          detail?: Json
          id?: string
          kind?: string
          subscription_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscription_events_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      subscriptions: {
        Row: {
          cancelled_at: string | null
          created_at: string
          current_period_end: string | null
          current_period_start: string | null
          id: string
          plan_version_id: string
          status: Database["public"]["Enums"]["subscription_status"]
          updated_at: string
          user_id: string
        }
        Insert: {
          cancelled_at?: string | null
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan_version_id: string
          status?: Database["public"]["Enums"]["subscription_status"]
          updated_at?: string
          user_id: string
        }
        Update: {
          cancelled_at?: string | null
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan_version_id?: string
          status?: Database["public"]["Enums"]["subscription_status"]
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_plan_version_id_fkey"
            columns: ["plan_version_id"]
            isOneToOne: false
            referencedRelation: "plan_versions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscriptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "subscriptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      support_internal_notes: {
        Row: {
          author_id: string
          body: string
          created_at: string
          id: string
          ticket_id: string
        }
        Insert: {
          author_id: string
          body: string
          created_at?: string
          id?: string
          ticket_id: string
        }
        Update: {
          author_id?: string
          body?: string
          created_at?: string
          id?: string
          ticket_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "support_internal_notes_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "support_tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      support_messages: {
        Row: {
          body: string
          created_at: string
          id: string
          sender_id: string | null
          sender_kind: string
          ticket_id: string
        }
        Insert: {
          body: string
          created_at?: string
          id?: string
          sender_id?: string | null
          sender_kind: string
          ticket_id: string
        }
        Update: {
          body?: string
          created_at?: string
          id?: string
          sender_id?: string | null
          sender_kind?: string
          ticket_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "support_messages_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "support_tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      support_tickets: {
        Row: {
          assigned_to: string | null
          created_at: string
          id: string
          reference: string
          status: Database["public"]["Enums"]["support_ticket_status"]
          subject: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          assigned_to?: string | null
          created_at?: string
          id?: string
          reference: string
          status?: Database["public"]["Enums"]["support_ticket_status"]
          subject: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          assigned_to?: string | null
          created_at?: string
          id?: string
          reference?: string
          status?: Database["public"]["Enums"]["support_ticket_status"]
          subject?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "support_tickets_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "staff_profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "support_tickets_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "support_tickets_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      system_settings: {
        Row: {
          setting_key: string
          updated_at: string
          updated_by: string | null
          value: Json
        }
        Insert: {
          setting_key: string
          updated_at?: string
          updated_by?: string | null
          value: Json
        }
        Update: {
          setting_key?: string
          updated_at?: string
          updated_by?: string | null
          value?: Json
        }
        Relationships: []
      }
      unit_inventory_events: {
        Row: {
          actor_id: string | null
          created_at: string
          delta: number
          id: string
          reason: string
          unit_id: string
        }
        Insert: {
          actor_id?: string | null
          created_at?: string
          delta: number
          id?: string
          reason: string
          unit_id: string
        }
        Update: {
          actor_id?: string | null
          created_at?: string
          delta?: number
          id?: string
          reason?: string
          unit_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "unit_inventory_events_unit_id_fkey"
            columns: ["unit_id"]
            isOneToOne: false
            referencedRelation: "project_units"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "unit_inventory_events_unit_id_fkey"
            columns: ["unit_id"]
            isOneToOne: false
            referencedRelation: "public_units"
            referencedColumns: ["id"]
          },
        ]
      }
      unit_media: {
        Row: {
          created_at: string
          id: string
          media_kind: string
          sort_order: number
          storage_path: string
          unit_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          media_kind?: string
          sort_order?: number
          storage_path: string
          unit_id: string
        }
        Update: {
          created_at?: string
          id?: string
          media_kind?: string
          sort_order?: number
          storage_path?: string
          unit_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "unit_media_unit_id_fkey"
            columns: ["unit_id"]
            isOneToOne: false
            referencedRelation: "project_units"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "unit_media_unit_id_fkey"
            columns: ["unit_id"]
            isOneToOne: false
            referencedRelation: "public_units"
            referencedColumns: ["id"]
          },
        ]
      }
      unit_price_history: {
        Row: {
          actor_id: string | null
          created_at: string
          id: string
          new_price_minor: number | null
          old_price_minor: number | null
          unit_id: string
        }
        Insert: {
          actor_id?: string | null
          created_at?: string
          id?: string
          new_price_minor?: number | null
          old_price_minor?: number | null
          unit_id: string
        }
        Update: {
          actor_id?: string | null
          created_at?: string
          id?: string
          new_price_minor?: number | null
          old_price_minor?: number | null
          unit_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "unit_price_history_unit_id_fkey"
            columns: ["unit_id"]
            isOneToOne: false
            referencedRelation: "project_units"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "unit_price_history_unit_id_fkey"
            columns: ["unit_id"]
            isOneToOne: false
            referencedRelation: "public_units"
            referencedColumns: ["id"]
          },
        ]
      }
      usage_counters: {
        Row: {
          counter_key: string
          period_start: string
          used: number
          user_id: string
        }
        Insert: {
          counter_key: string
          period_start: string
          used?: number
          user_id: string
        }
        Update: {
          counter_key?: string
          period_start?: string
          used?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "usage_counters_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "usage_counters_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "public_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
    }
    Views: {
      public_blog_articles: {
        Row: {
          body: Json | null
          excerpt: string | null
          published_at: string | null
          slug: string | null
          title: string | null
        }
        Insert: {
          body?: Json | null
          excerpt?: string | null
          published_at?: string | null
          slug?: string | null
          title?: string | null
        }
        Update: {
          body?: Json | null
          excerpt?: string | null
          published_at?: string | null
          slug?: string | null
          title?: string | null
        }
        Relationships: []
      }
      public_cms_pages: {
        Row: {
          body: Json | null
          slug: string | null
          title: string | null
          version: number | null
        }
        Relationships: []
      }
      public_locations: {
        Row: {
          id: string | null
          level: Database["public"]["Enums"]["location_level"] | null
          name: string | null
          parent_id: string | null
          slug: string | null
        }
        Insert: {
          id?: string | null
          level?: Database["public"]["Enums"]["location_level"] | null
          name?: string | null
          parent_id?: string | null
          slug?: string | null
        }
        Update: {
          id?: string | null
          level?: Database["public"]["Enums"]["location_level"] | null
          name?: string | null
          parent_id?: string | null
          slug?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "locations_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "locations_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "public_locations"
            referencedColumns: ["id"]
          },
        ]
      }
      public_profiles: {
        Row: {
          about: string | null
          display_name: string | null
          public_slug: string | null
          role: Database["public"]["Enums"]["public_role"] | null
          user_id: string | null
          verification:
            | Database["public"]["Enums"]["verification_status"]
            | null
        }
        Relationships: []
      }
      public_projects: {
        Row: {
          address_text: string | null
          city_id: string | null
          created_at: string | null
          id: string | null
          locality_id: string | null
          name: string | null
          possession_by: string | null
          rera_number: string | null
          slug: string | null
        }
        Insert: {
          address_text?: string | null
          city_id?: string | null
          created_at?: string | null
          id?: string | null
          locality_id?: string | null
          name?: string | null
          possession_by?: string | null
          rera_number?: string | null
          slug?: string | null
        }
        Update: {
          address_text?: string | null
          city_id?: string | null
          created_at?: string | null
          id?: string | null
          locality_id?: string | null
          name?: string | null
          possession_by?: string | null
          rera_number?: string | null
          slug?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projects_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "public_locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projects_locality_id_fkey"
            columns: ["locality_id"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projects_locality_id_fkey"
            columns: ["locality_id"]
            isOneToOne: false
            referencedRelation: "public_locations"
            referencedColumns: ["id"]
          },
        ]
      }
      public_promotions: {
        Row: {
          headline: string | null
          id: string | null
          project_id: string | null
          sort_order: number | null
          storage_path: string | null
        }
        Relationships: [
          {
            foreignKeyName: "promotions_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "promotions_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "public_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      public_properties: {
        Row: {
          address_text: string | null
          city_id: string | null
          created_at: string | null
          id: string | null
          locality_id: string | null
          price_minor: number | null
          property_type: string | null
          purpose: Database["public"]["Enums"]["property_purpose"] | null
          slug: string | null
          title: string | null
        }
        Insert: {
          address_text?: string | null
          city_id?: string | null
          created_at?: string | null
          id?: string | null
          locality_id?: string | null
          price_minor?: number | null
          property_type?: string | null
          purpose?: Database["public"]["Enums"]["property_purpose"] | null
          slug?: string | null
          title?: string | null
        }
        Update: {
          address_text?: string | null
          city_id?: string | null
          created_at?: string | null
          id?: string | null
          locality_id?: string | null
          price_minor?: number | null
          property_type?: string | null
          purpose?: Database["public"]["Enums"]["property_purpose"] | null
          slug?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "properties_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "properties_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "public_locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "properties_locality_id_fkey"
            columns: ["locality_id"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "properties_locality_id_fkey"
            columns: ["locality_id"]
            isOneToOne: false
            referencedRelation: "public_locations"
            referencedColumns: ["id"]
          },
        ]
      }
      public_units: {
        Row: {
          available_count: number | null
          carpet_area_sqft: number | null
          id: string | null
          price_minor: number | null
          project_id: string | null
          total_count: number | null
          unit_label: string | null
          unit_type: string | null
        }
        Relationships: [
          {
            foreignKeyName: "project_units_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_units_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "public_projects"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      has_permission: { Args: { p_key: string }; Returns: boolean }
      is_admin: { Args: never; Returns: boolean }
      is_staff: { Args: never; Returns: boolean }
      is_super_admin: { Args: never; Returns: boolean }
      lead_participant: { Args: { p_lead: string }; Returns: boolean }
      new_correlation_id: { Args: never; Returns: string }
      project_is_public: { Args: { p_id: string }; Returns: boolean }
      project_owned_by_me: { Args: { p_id: string }; Returns: boolean }
      property_is_public: { Args: { p_id: string }; Returns: boolean }
      property_owned_by_me: { Args: { p_id: string }; Returns: boolean }
      record_audit: {
        Args: {
          p_action: string
          p_actor_id: string
          p_actor_role: string
          p_after?: Json
          p_before?: Json
          p_correlation_id?: string
          p_entity_id: string
          p_entity_kind: string
          p_reason: string
        }
        Returns: string
      }
      record_status_history: {
        Args: {
          p_actor: string
          p_entity_id: string
          p_field: string
          p_from: string
          p_reason: string
          p_table: string
          p_to: string
        }
        Returns: undefined
      }
    }
    Enums: {
      account_status:
        | "active"
        | "pending_verification"
        | "restricted"
        | "suspended"
        | "closed"
      bug_status:
        | "reported"
        | "triaged"
        | "in_progress"
        | "fixed"
        | "wont_fix"
        | "duplicate"
      follow_up_status: "scheduled" | "due" | "done" | "cancelled" | "missed"
      internal_role: "super_admin" | "admin" | "staff"
      lead_priority: "low" | "medium" | "high" | "urgent"
      lead_source_kind: "property" | "project" | "unit" | "requirement"
      lead_status:
        | "new"
        | "contacted"
        | "qualified"
        | "negotiating"
        | "converted"
        | "closed_lost"
        | "spam"
      lifecycle_status: "active" | "paused" | "deleted" | "restored"
      location_level: "state" | "district" | "taluka" | "city" | "locality"
      message_status: "sent" | "delivered" | "read" | "deleted"
      moderation_status:
        | "pending"
        | "approved"
        | "rejected"
        | "changes_requested"
        | "reopened"
      notification_channel: "in_app" | "email" | "sms"
      onboarding_status: "registered" | "profile_pending" | "profile_complete"
      payment_status:
        | "created"
        | "pending"
        | "authorized"
        | "captured"
        | "failed"
        | "refunded"
      profile_completion: "minimal" | "basic" | "complete"
      promotion_status:
        | "draft"
        | "submitted"
        | "approved"
        | "live"
        | "paused"
        | "ended"
        | "rejected"
      property_purpose: "sell" | "rent" | "lease"
      provider_status:
        | "NOT_STARTED"
        | "SETUP_REQUIRED"
        | "CONFIGURED_NOT_TESTED"
        | "TEST_MODE_ONLY"
        | "ACTIVE"
        | "LIVE_READY"
        | "BLOCKED"
        | "FAILED"
        | "DEGRADED"
        | "DISABLED_BY_FLAG"
      public_role: "owner" | "broker" | "builder"
      publication_status: "draft" | "published" | "paused" | "archived"
      recovery_status:
        | "none"
        | "requested"
        | "in_progress"
        | "recovered"
        | "denied"
      report_status:
        | "open"
        | "in_review"
        | "resolved"
        | "dismissed"
        | "escalated"
      subscription_status:
        | "none"
        | "trialing"
        | "active"
        | "past_due"
        | "cancelled"
        | "expired"
      support_ticket_status:
        | "open"
        | "waiting_user"
        | "waiting_staff"
        | "resolved"
        | "closed"
      verification_status: "unverified" | "pending" | "verified" | "rejected"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {
      account_status: [
        "active",
        "pending_verification",
        "restricted",
        "suspended",
        "closed",
      ],
      bug_status: [
        "reported",
        "triaged",
        "in_progress",
        "fixed",
        "wont_fix",
        "duplicate",
      ],
      follow_up_status: ["scheduled", "due", "done", "cancelled", "missed"],
      internal_role: ["super_admin", "admin", "staff"],
      lead_priority: ["low", "medium", "high", "urgent"],
      lead_source_kind: ["property", "project", "unit", "requirement"],
      lead_status: [
        "new",
        "contacted",
        "qualified",
        "negotiating",
        "converted",
        "closed_lost",
        "spam",
      ],
      lifecycle_status: ["active", "paused", "deleted", "restored"],
      location_level: ["state", "district", "taluka", "city", "locality"],
      message_status: ["sent", "delivered", "read", "deleted"],
      moderation_status: [
        "pending",
        "approved",
        "rejected",
        "changes_requested",
        "reopened",
      ],
      notification_channel: ["in_app", "email", "sms"],
      onboarding_status: ["registered", "profile_pending", "profile_complete"],
      payment_status: [
        "created",
        "pending",
        "authorized",
        "captured",
        "failed",
        "refunded",
      ],
      profile_completion: ["minimal", "basic", "complete"],
      promotion_status: [
        "draft",
        "submitted",
        "approved",
        "live",
        "paused",
        "ended",
        "rejected",
      ],
      property_purpose: ["sell", "rent", "lease"],
      provider_status: [
        "NOT_STARTED",
        "SETUP_REQUIRED",
        "CONFIGURED_NOT_TESTED",
        "TEST_MODE_ONLY",
        "ACTIVE",
        "LIVE_READY",
        "BLOCKED",
        "FAILED",
        "DEGRADED",
        "DISABLED_BY_FLAG",
      ],
      public_role: ["owner", "broker", "builder"],
      publication_status: ["draft", "published", "paused", "archived"],
      recovery_status: [
        "none",
        "requested",
        "in_progress",
        "recovered",
        "denied",
      ],
      report_status: [
        "open",
        "in_review",
        "resolved",
        "dismissed",
        "escalated",
      ],
      subscription_status: [
        "none",
        "trialing",
        "active",
        "past_due",
        "cancelled",
        "expired",
      ],
      support_ticket_status: [
        "open",
        "waiting_user",
        "waiting_staff",
        "resolved",
        "closed",
      ],
      verification_status: ["unverified", "pending", "verified", "rejected"],
    },
  },
} as const
